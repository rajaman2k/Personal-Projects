import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/employee/fetchAll");
                if (!response.ok) throw new Error("Failed to fetch employees.");

                const data = await response.json();
                setEmployees(data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch employees. Please try again.");
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="list-container">
            <div className="list-header">
                <h2>List of All Employees</h2>
                <p>View details of all registered employees.</p>
            </div>

            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>PIN Code</th>
                        <th>Area</th>
                        <th>District</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.employeeId}>
                            <td>{employee.employeeId}</td>
                            <td>{employee.name}</td>
                            <td>{employee.dob}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.pincode}</td>
                            <td>{employee.area}</td>
                            <td>{employee.district}</td>
                            <td>{employee.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="back-btn" onClick={() => navigate("/")}>
                Back to Dashboard
            </button>
        </div>
    );
};

export default ListEmployee;