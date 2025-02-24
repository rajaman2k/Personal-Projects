package com.bosch.userbase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.userbase.entity.Employee;
import com.bosch.userbase.repository.EmployeeRepository;

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
}
