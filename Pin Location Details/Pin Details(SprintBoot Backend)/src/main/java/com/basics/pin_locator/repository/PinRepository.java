package com.basics.pin_locator.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.basics.pin_locator.entity.Pin;

@Repository
public interface PinRepository extends JpaRepository<Pin, Integer> {
	List<Pin> findByPincode(int pincode);
}