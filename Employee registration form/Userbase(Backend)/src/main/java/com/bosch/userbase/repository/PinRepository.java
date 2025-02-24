package com.bosch.userbase.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bosch.userbase.entity.Pin;

public interface PinRepository extends JpaRepository<Pin, Long> {
    // Retrieve all pin records by pincode
    List<Pin> findByPincode(String pincode);
}