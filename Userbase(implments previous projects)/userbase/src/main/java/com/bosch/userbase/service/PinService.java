package com.bosch.userbase.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.userbase.entity.Pin;
import com.bosch.userbase.repository.PinRepository;

@Service
public class PinService {

    @Autowired
    private PinRepository pinRepository;

    // Return all pins matching a given pincode (for dropdown)
    public List<Pin> getPinsByPincode(String pincode) {
    	List<Pin> pins = pinRepository.findByPincode(pincode);
        if (pins.isEmpty()) {
            System.out.println("No pins found for pincode: " + pincode);
        } else {
            System.out.println("Pins found: " + pins);
        }
        return pins;
    }

    // For default selection (e.g., choose the first record)
    public Pin getDefaultPinByPincode(String pincode) {
        List<Pin> pins = getPinsByPincode(pincode);
        if (pins != null && !pins.isEmpty()) {
            return pins.get(0);
        }
        return null;
    }
}