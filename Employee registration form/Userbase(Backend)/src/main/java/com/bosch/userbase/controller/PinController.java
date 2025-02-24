package com.bosch.userbase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.userbase.entity.Pin;
import com.bosch.userbase.service.PinService;

@RestController
@RequestMapping("/api/pins")
@CrossOrigin(origins = "http://localhost:3000")
public class PinController {

    @Autowired
    private PinService pinService;

    // Endpoint to fetch all pin records for a given pincode
    @GetMapping("/{pincode}")
    public List<Pin> getPinsByPincode(@PathVariable String pincode) {
        return pinService.getPinsByPincode(pincode);
    }

    // Optional endpoint to get the default pin record (if needed)
    @GetMapping("/default/{pincode}")
    public Pin getDefaultPin(@PathVariable String pincode) {
        return pinService.getDefaultPinByPincode(pincode);
    }
}