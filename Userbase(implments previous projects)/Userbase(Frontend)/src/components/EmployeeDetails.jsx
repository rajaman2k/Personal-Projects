import React from "react";
import { useLocation , useNavigate } from "react-router-dom";

const EmployeeDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { employeeData } = location.state || {}; // Retrieve the passed data

    if (!employeeData) {
        return <div>No employee data found.</div>;
    }

    return (
        <div className="container">
            <h2>Registered Employee Details</h2>
            <div className="details-section">
                <p><strong>Employee ID:</strong> {employeeData.employeeId}</p>
                <p><strong>Name:</strong> {employeeData.name}</p>
                <p><strong>Date of Birth:</strong> {employeeData.dob}</p>
                <p><strong>Gender:</strong> {employeeData.gender}</p>
                <p><strong>PIN Code:</strong> {employeeData.pincode}</p>
                <p><strong>Area:</strong> {employeeData.area}</p>
                <p><strong>District:</strong> {employeeData.district}</p>
                <p><strong>State:</strong> {employeeData.state}</p>
                {employeeData.mobile && <p><strong>Mobile:</strong> {employeeData.mobile}</p>}
                {employeeData.email && <p><strong>Email:</strong> {employeeData.email}</p>}
                {employeeData.feedback && <p><strong>Feedback:</strong> {employeeData.feedback}</p>}
                {employeeData.dateOfJoining && <p><strong>Date of Joining:</strong> {employeeData.dateOfJoining}</p>}
                {employeeData.designation && <p><strong>Designation:</strong> {employeeData.designation}</p>}
            </div>
            <button onClick={() => navigate("/")} className="back-btn">
                Back to Dashboard
            </button>
        </div>
    );
};

export default EmployeeDetails;