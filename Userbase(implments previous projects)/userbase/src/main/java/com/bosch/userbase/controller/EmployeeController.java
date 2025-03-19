package com.bosch.userbase.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bosch.userbase.entity.Employee;
import com.bosch.userbase.service.EmployeeService;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;


    @PostMapping
    public Employee saveEmployee(@RequestBody Employee employee) {
        System.out.println("Received Employee Data: " + employee.toString());
        return employeeService.saveEmployee(employee);
    }
    
    
    // Get Employee by ID
    @GetMapping("search/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable String id) {
        Optional<Employee> employee = employeeService.findEmployeeById(id);
        
        if (employee.isPresent()) {
            return ResponseEntity.ok(employee.get());
        } else {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Employee with ID " + id + " not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    // Update Employee
    @PutMapping("/edit/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable String id, @RequestBody Employee updatedEmployee) {
        return ResponseEntity.ok(employeeService.updateEmployee(id, updatedEmployee));
    }

    // Get All Employees
    @GetMapping("/fetchAll")
    public ResponseEntity<List<Employee>> getAllEmployees() {
        return ResponseEntity.ok(employeeService.getAllEmployees());
    }

    // Delete Employee
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable String id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee deleted successfully.");
    }
    
 // EmployeeController.java
    @GetMapping("/search")
    public ResponseEntity<List<Employee>> searchEmployees(@RequestParam String query) {
        List<Employee> results = new ArrayList<>();
        
        // Check if query is numeric (potential employee ID)
        if (query.matches("\\d+")) {
            Optional<Employee> emp = employeeService.findEmployeeById(query);
            emp.ifPresent(results::add);
        } else {
            // Search by name
            results = employeeService.findEmployeesByName(query);
        }
        
        return ResponseEntity.ok(results);
    }
    
}
