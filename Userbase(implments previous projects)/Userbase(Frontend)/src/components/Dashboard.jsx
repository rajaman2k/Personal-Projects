import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css"

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Employee Management Dashboard</h1>
                <p>Manage your employees efficiently with the tools below.</p>
            </div>

            <div className="dashboard-buttons">
                {/* Register New Employee */}
                <button
                    className="dashboard-btn register-btn"
                    onClick={() => navigate("/register")}
                >
                    <span className="btn-icon">📝</span>
                    <span className="btn-text">Register New Employee</span>
                </button>

                {/* Find/Search Employee */}
                <button
                    className="dashboard-btn search-btn"
                    onClick={() => navigate("/edit-delete")}
                >
                    <span className="btn-icon">🔍</span>
                    <span className="btn-text">Find / Search Employee</span>
                </button>

                {/* List All Employees */}
                <button
                    className="dashboard-btn list-btn"
                    onClick={() => navigate("/list")}
                >
                    <span className="btn-icon">📄</span>
                    <span className="btn-text">List All Employees</span>
                </button>

                {/* Edit/Delete Employee Details */}
                <button
                    className="dashboard-btn edit-delete-btn"
                    onClick={() => navigate("/edit-delete")}
                >
                    <span className="btn-icon">🛠️</span>
                    <span className="btn-text">Edit / Delete Employee</span>
                </button>
            </div>
        </div>
    );
};

export default Dashboard;