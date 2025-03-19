package com.bosch.userbase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bosch.userbase.entity.Employee;
import com.bosch.userbase.repository.EmployeeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee saveEmployee(Employee employee) {
        // Check if employeeId already exists
        Optional<Employee> existingEmployee = employeeRepository.findById(employee.getEmployeeId());
        if (existingEmployee.isPresent()) {
            throw new RuntimeException("Employee with ID " + employee.getEmployeeId() + " already exists.");
        }
        return employeeRepository.save(employee);
    }
    

    // Find Employee by Name
    public List<Employee> findEmployeesByName(String name) {
        return employeeRepository.findByNameContainingIgnoreCase(name);
    }

    // Edit Employee Details
    public Employee updateEmployee(String empId, Employee updatedEmployee) {
        Optional<Employee> existingEmployee = employeeRepository.findById(empId);
        if (existingEmployee.isPresent()) {
            Employee employee = existingEmployee.get();
            employee.setName(updatedEmployee.getName());
            employee.setDob(updatedEmployee.getDob());
            employee.setGender(updatedEmployee.getGender());
            employee.setPincode(updatedEmployee.getPincode());
            employee.setArea(updatedEmployee.getArea());
            employee.setDistrict(updatedEmployee.getDistrict());
            employee.setState(updatedEmployee.getState());
            employee.setMobile(updatedEmployee.getMobile());
            employee.setEmail(updatedEmployee.getEmail());
            employee.setDateOfJoining(updatedEmployee.getDateOfJoining());
            employee.setDesignation(updatedEmployee.getDesignation());
            employee.setFeedback(updatedEmployee.getFeedback());
            return employeeRepository.save(employee);
        }
        return null; // Handle not found case properly in Controller
    }

    // List All Employees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // Delete Employee Record
    public void deleteEmployee(String empId) {
        employeeRepository.deleteById(empId);
    }


	public Optional<Employee> findEmployeeById(String id) {
		return employeeRepository.findById(id);
	}
}
