package com.bosch.userbase.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bosch.userbase.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, String> {
    // Employee id is the primary key (String)
}