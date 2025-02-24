import React, { useState } from "react";

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        employeeId: "",
        name: "",
        dob: "",
        gender: "Male",
        pincode: "",
        area: "",
        district: "",
        state: "",
        mobile: "",
        email: "",
        feedback: "",
        dateOfJoining: "",
        designation: ""
    });

    const [areaOptions, setAreaOptions] = useState([]);
    const [additionalFields, setAdditionalFields] = useState([]);
    const [selectedField, setSelectedField] = useState("");
    const availableFields = ["mobile", "email", "feedback", "dateOfJoining", "designation"];
    const remainingFields = availableFields.filter(field => !additionalFields.includes(field));
    const fieldOrder = ["mobile", "email", "feedback", "dateOfJoining", "designation"];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePinChange = async (e) => {
        const pincode = e.target.value;
        setFormData({ ...formData, pincode });
        if (pincode.length === 6) {
            try {
                const response = await fetch(`http://localhost:8080/api/pins/${pincode}`);
                if (!response.ok) throw new Error("Invalid PIN");
                const data = await response.json();
                setAreaOptions(data);
                if (data.length > 0) {
                    const firstArea = data[0];
                    setFormData({
                        ...formData,
                        pincode,
                        area: firstArea.area,
                        district: firstArea.district,
                        state: firstArea.state,
                    });
                }
            } catch (error) {
                alert("PIN not found. Please enter a valid 6-digit PIN.");
                setFormData({ ...formData, district: "", state: "", area: "" });
            }
        }
    };

    const handleAreaChange = (e) => {
        const selectedArea = e.target.value;
        const selectedData = areaOptions.find(area => area.area === selectedArea);
        if (selectedData) {
            setFormData({
                ...formData,
                area: selectedArea,
                district: selectedData.district,
                state: selectedData.state,
            });
        }
    };

    const addField = (field) => {
        if (field) {
            setAdditionalFields(prevFields => {
                const newFields = [...prevFields, field].sort((a, b) => fieldOrder.indexOf(a) - fieldOrder.indexOf(b));
                return newFields;
            });
            setSelectedField(""); // Reset dropdown to default after selection
        }
    };

    const removeField = (field) => {
        setAdditionalFields(additionalFields.filter(f => f !== field));
        setFormData({ ...formData, [field]: "" });
    };

    const formatDateForBackend = (dateString) => {
        return dateString ? new Date(dateString).toISOString().split("T")[0] : "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.employeeId || !formData.name || !formData.dob || !formData.pincode) {
            alert("Employee ID, Name, DOB, and PIN Code are required.");
            return;
        }
        const formattedData = {
            ...formData,
            dob: formatDateForBackend(formData.dob),
            dateOfJoining: formatDateForBackend(formData.dateOfJoining),
        };
        try {
            const response = await fetch("http://localhost:8080/api/employee", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formattedData)
            });
            if (!response.ok) throw new Error("Failed to submit form");
            alert("Form submitted successfully!");
        } catch (error) {
            alert("Error submitting form. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="form-header">
                <h2>Employee Registration</h2>
                <p>Please fill in the required details</p>
            </div>
            
            <form onSubmit={handleSubmit} className="form-body">
                <div className="form-section">
                    <div className="form-column">
                        <div className="form-row">
                            <div className="input-group">
                                <label>Employee ID</label>
                                <input type="text" name="employeeId" value={formData.employeeId} 
                                    onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <label>Full Name</label>
                                <input type="text" name="name" value={formData.name} 
                                    onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group">
                                <label>Date of Birth</label>
                                <input type="date" name="dob" value={formData.dob} 
                                    onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <label>Gender</label>
                                <select name="gender" value={formData.gender} 
                                    onChange={handleChange} className="styled-select">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group">
                                <label>PIN Code</label>
                                <input type="text" name="pincode" value={formData.pincode} 
                                    onChange={handlePinChange} maxLength="6" required />
                            </div>
                            <div className="input-group">
                                <label>Area</label>
                                <select name="area" value={formData.area} 
                                    onChange={handleAreaChange} className="styled-select">
                                    <option value="">Select Area</option>
                                    {areaOptions.map((area, index) => (
                                        <option key={index} value={area.area}>{area.area}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group">
                                <label>District</label>
                                <input type="text" name="district" value={formData.district} readOnly />
                            </div>
                            <div className="input-group">
                                <label>State</label>
                                <input type="text" name="state" value={formData.state} readOnly />
                            </div>
                        </div>
                    </div>

                    <div className="form-column">
                        <div className="additional-fields-section">
                            <div className="field-add-control">
                                {remainingFields.length > 0 && (
                                    <select value={selectedField} onChange={(e) => addField(e.target.value)} 
                                        className="styled-select field-adder">
                                        <option value="">Add Additional Field</option>
                                        {remainingFields.map((field, index) => (
                                            <option key={index} value={field}>
                                                {field.charAt(0).toUpperCase() + field.slice(1)}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>

                            {additionalFields.map(field => (
                                <div key={field} className="dynamic-field">
                                    <div className="input-group">
                                        <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                        <div className="input-with-action">
                                            {field === "feedback" ? (
                                                <textarea
                                                    name={field}
                                                    value={formData[field] || ""}
                                                    onChange={handleChange}
                                                    placeholder="Your feedback..."
                                                    className="feedback-input"
                                                />
                                            ) : (
                                                <input
                                                    type={field === "dateOfJoining" ? "date" : "text"}
                                                    name={field}
                                                    value={formData[field] || ""}
                                                    onChange={handleChange}
                                                />
                                            )}
                                            <button type="button" className="remove-btn" 
                                                onClick={() => removeField(field)}>
                                                ×
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <button type="submit" className="submit-btn">
                    Register Employee
                </button>
                <button type="button" className="back-btn">Back</button>
            </form>
        </div>
    );
};

export default EmployeeForm;