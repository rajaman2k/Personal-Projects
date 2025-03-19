package com.bosch.userbase.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "pins")
public class Pin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    
    @Column(name = "pincode", nullable = false, length = 6)
    private String pincode;

    @Column(name = "area", nullable = false, length = 255)
    private String area;

    @Column(name = "district", nullable = false, length = 255)
    private String district;

    @Column(name = "state", nullable = false, length = 255)
    private String state;

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
