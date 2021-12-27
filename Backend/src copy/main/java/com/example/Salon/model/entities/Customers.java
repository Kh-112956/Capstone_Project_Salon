package com.example.Salon.model.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")

public class Customers {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;
    private String fname;
    private String lname;
    private int phone;
    private String state;
    private String gender;
    private  String city;

    @ManyToMany
    @JoinTable(name = "Customer_Services",
        joinColumns = @JoinColumn(name = "customer_id"),
            inverseJoinColumns = @JoinColumn(name = "services_id"))
    private List<Services> serviceMul = new ArrayList<>();

    public Customers(int id, String fname, String lname, int phone, String state, String gender, String city, List<Services> serviceMul) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.state = state;
        this.gender = gender;
        this.city = city;
        this.serviceMul = serviceMul;
    }

    public Customers() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public List<Services> getServiceMul() {
        return serviceMul;
    }

    public void setServiceMul(List<Services> serviceMul) {
        this.serviceMul = serviceMul;
    }
}
