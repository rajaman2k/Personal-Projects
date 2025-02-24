package com.basics.pin_locator.service;

import com.basics.pin_locator.entity.Pin;
import com.basics.pin_locator.repository.PinRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PinService {

	@Autowired
	private PinRepository pinRepository;

	public List<Pin> getDetailsByPin(int pincode) {
	    System.out.println("Fetching details for pin:"+pincode);
	    return pinRepository.findByPincode(pincode);
	}

}