import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditDeleteEmployee = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [areaOptions, setAreaOptions] = useState([]);
    const navigate = useNavigate();

    // Debounced search
    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchQuery.trim().length > 1) {
                fetch(`http://localhost:8080/api/employee/search?query=${encodeURIComponent(searchQuery)}`)
                    .then(res => res.json())
                    .then(data => setSuggestions(data))
                    .catch(() => setSuggestions([]));
            }
        }, 300);

        return () => clearTimeout(handler);
    }, [searchQuery]);

    const handleSearchSelect = async (employeeId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/employee/search/${employeeId}`);
            if (!response.ok) throw new Error('Employee not found');
            
            const data = await response.json();
            setSelectedEmployee(data);
            setSuggestions([]);
            setError('');
        } catch (err) {
            setError('Employee not found');
            setSelectedEmployee(null);
        }
    };

    const handlePinChange = async (pincode) => {
        if (pincode.length === 6) {
            try {
                const response = await fetch(`http://localhost:8080/api/pins/${pincode}`);
                if (!response.ok) throw new Error('Invalid PIN');
                
                const data = await response.json();
                setAreaOptions(data);

                if (data.length > 0) {
                    setSelectedEmployee(prev => ({
                        ...prev,
                        pincode,
                        area: data[0].area,
                        district: data[0].district,
                        state: data[0].state
                    }));
                }
            } catch (err) {
                alert('PIN not found. Please enter a valid 6-digit PIN.');
                setAreaOptions([]);
            }
        }
    };

    const handleAreaChange = (e) => {
        const selectedArea = e.target.value;
        const selectedData = areaOptions.find(area => area.area === selectedArea);
        if (selectedData) {
            setSelectedEmployee(prev => ({
                ...prev,
                area: selectedArea,
                district: selectedData.district,
                state: selectedData.state
            }));
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/employee/edit/${selectedEmployee.employeeId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(selectedEmployee)
            });

            if (!response.ok) throw new Error('Failed to update employee');
            
            alert('Employee updated successfully!');
            setIsEditing(false);
        } catch (err) {
            alert('Error updating employee. Please try again.');
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                const response = await fetch(`http://localhost:8080/api/employee/delete/${selectedEmployee.employeeId}`, {
                    method: 'DELETE'
                });

                if (!response.ok) throw new Error('Failed to delete employee');
                
                alert('Employee deleted successfully!');
                navigate('/');
            } catch (err) {
                alert('Error deleting employee. Please try again.');
            }
        }
    };

    return (
        <div className="edit-delete-container">
            <div className="edit-delete-header">
                <h2>Employee Management</h2>
                <p>Search by Employee ID or Name</p>
            </div>

            <div className="search-container">
                <div className="search-input-group">
                    <input
                        type="text"
                        placeholder="Enter Employee ID or Name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {suggestions.length > 0 && (
                        <div className="suggestions-dropdown">
                            {suggestions.map(emp => (
                                <div
                                    key={emp.employeeId}
                                    className="suggestion-item"
                                    onClick={() => handleSearchSelect(emp.employeeId)}
                                >
                                    <span className="emp-id">{emp.employeeId}</span>
                                    <span className="emp-name">{emp.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            {selectedEmployee && (
                <div className="employee-details">
                    <div className="details-header">
                        <h3>Employee Details</h3>
                        <div className="button-group">
                            <button 
                                className="btn-primary"
                                onClick={() => setIsEditing(!isEditing)}
                            >
                                {isEditing ? 'Cancel' : 'Edit'}
                            </button>
                            <button 
                                className="btn-danger btn-primary"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    {isEditing ? (
                        <form className="edit-form" onSubmit={handleEditSubmit}>
                            {/* Form fields */}
                            <div>
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={selectedEmployee.name}
                                    onChange={(e) => setSelectedEmployee(prev => ({
                                        ...prev,
                                        name: e.target.value
                                    }))}
                                    required
                                />
                            </div>

                            <div>
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    value={selectedEmployee.dob}
                                    onChange={(e) => setSelectedEmployee(prev => ({
                                        ...prev,
                                        dob: e.target.value
                                    }))}
                                    required
                                />
                            </div>

                            <div>
                                <label>Gender</label>
                                <select
                                    value={selectedEmployee.gender}
                                    onChange={(e) => setSelectedEmployee(prev => ({
                                        ...prev,
                                        gender: e.target.value
                                    }))}
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label>PIN Code</label>
                                <input
                                    type="text"
                                    value={selectedEmployee.pincode}
                                    onChange={(e) => {
                                        const pincode = e.target.value;
                                        setSelectedEmployee(prev => ({
                                            ...prev,
                                            pincode
                                        }));
                                        handlePinChange(pincode);
                                    }}
                                    maxLength="6"
                                    required
                                />
                            </div>

                            <div>
                                <label>Area</label>
                                <select
                                    value={selectedEmployee.area}
                                    onChange={handleAreaChange}
                                >
                                    {areaOptions.map((area, index) => (
                                        <option key={index} value={area.area}>
                                            {area.area}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label>District</label>
                                <input
                                    type="text"
                                    value={selectedEmployee.district}
                                    readOnly
                                />
                            </div>

                            <div>
                                <label>State</label>
                                <input
                                    type="text"
                                    value={selectedEmployee.state}
                                    readOnly
                                />
                            </div>

                            <div className="button-group">
                                <button type="submit" className="btn-primary">
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    className="btn-secondary btn-primary"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="details-content">
                            <p><strong>ID:</strong> {selectedEmployee.employeeId}</p>
                            <p><strong>Name:</strong> {selectedEmployee.name}</p>
                            <p><strong>DOB:</strong> {selectedEmployee.dob}</p>
                            <p><strong>Gender:</strong> {selectedEmployee.gender}</p>
                            <p><strong>PIN Code:</strong> {selectedEmployee.pincode}</p>
                            <p><strong>Area:</strong> {selectedEmployee.area}</p>
                            <p><strong>District:</strong> {selectedEmployee.district}</p>
                            <p><strong>State:</strong> {selectedEmployee.state}</p>
                        </div>
                    )}
                </div>
            )}

            <button className="back-btn" onClick={() => navigate('/')}>
                Back to Dashboard
            </button>
        </div>
    );
};

export default EditDeleteEmployee;