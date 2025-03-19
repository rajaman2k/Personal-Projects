package com.bosch.userbase.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @Column(name = "employee_id", nullable = false, length = 10)
    private String employeeId;  // Primary Key

    @Column(name = "name", nullable = false, length = 255)
    private String name;

    @Column(name = "dob", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date dob;

    @Column(name = "gender", nullable = false, length = 10)
    private String gender;

    @Column(name = "pincode", nullable = false)
    private String pincode;

    @Column(name = "area", nullable = false, length = 255)
    private String area;

    @Column(name = "district", nullable = false, length = 255)
    private String district;

    @Column(name = "state", nullable = false, length = 255)
    private String state;

    @Column(name = "mobile", length = 20)
    private String mobile;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "feedback", length = 500)
    private String feedback;

    @Column(name = "date_of_joining")
    @Temporal(TemporalType.DATE)
    private Date dateOfJoining;

    @Column(name = "designation", length = 255)
    private String designation;

    // Getters and Setters

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
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

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public Date getDateOfJoining() {
        return dateOfJoining;
    }

    public void setDateOfJoining(Date dateOfJoining) {
        this.dateOfJoining = dateOfJoining;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }
}
