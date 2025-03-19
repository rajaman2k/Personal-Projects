import "./styles/index.css"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EmployeeForm from "./components/EmployeeForm";
import ListEmployee from "./components/ListEmployee";
import EditDeleteEmployee from "./components/EditDeleteEmployee";
import EmployeeDetails from "./components/EmployeeDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/register" element={<EmployeeForm />} />
                <Route path="/list" element={<ListEmployee />} />
                <Route path="/edit-delete" element={<EditDeleteEmployee />} />
                <Route path="/details" element={<EmployeeDetails />} />
            </Routes>
        </Router>
    );
}

export default App;