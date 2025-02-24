package com.bosch.userbase.controller;

import org.springframework.beans.factory.annotation.Autowired;
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

}
