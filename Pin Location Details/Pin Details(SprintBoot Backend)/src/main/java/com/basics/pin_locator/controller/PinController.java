package com.basics.pin_locator.controller;

import com.basics.pin_locator.entity.Pin;
import com.basics.pin_locator.service.PinService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class PinController {

    @Autowired
    private PinService pinService;

    @GetMapping("/{pin}")
    public List<Pin> getDetailsByPin(@PathVariable int pin) {
    	return pinService.getDetailsByPin(pin);
    }
}