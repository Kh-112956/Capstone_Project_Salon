package com.example.Salon.Model.Entities;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table
public class Customers {
    @Id
    private int id;
    private String fname;
    private String lname;
    private int phone;
    private String state;
    private String gender;
    private  String city;
    private int amp_id;

    @ManyToMany
    @JoinTable(
            name = "customers_services",
            joinColumns = @JoinColumn(name = "customer_id"),
            inverseJoinColumns = @JoinColumn(name = "services_id"))
    Set<Services> customerServices;

    //@OneToMany(mappedBy = "customers")
    @JsonIgnore
   // private List<Appointment> items = new ArrayList<>();

    public Customers(int id, String fname, String lname, int phone, String state, String gender, String city,int amp_id) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.state = state;
        this.gender = gender;
        this.city = city ;

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

    public int getAmp_id() {
        return amp_id;
    }

    public void setAmp_id(int amp_id) {
        this.amp_id = amp_id;
    }
}
