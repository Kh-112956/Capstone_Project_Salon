package com.example.Salon.model.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Customers {
    @Id
    private int id;
    private String fname;
    private String lname;
    private int phone;
    private String state;
    private String Gender;
    private  String City;


    public Customers(int id, String fname, String lname, int phone, String state, String gender, String city) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.state = state;
        this.Gender = gender;
        this.City = city;
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
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }

    @Override
    public String toString() {
        return "Customers{" +
                "id=" + id +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", phone=" + phone +
                ", state='" + state + '\'' +
                ", Gender='" + Gender + '\'' +
                ", City='" + City + '\'' +
                '}';
    }
}
