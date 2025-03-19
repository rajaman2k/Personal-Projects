package com.bosch.userbase.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bosch.userbase.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, String> {
	  List<Employee> findByNameContainingIgnoreCase(String name); // Custom query method
	}