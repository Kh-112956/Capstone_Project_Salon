package com.example.Salon.model.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table
public class Services {
    @Id
   @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int servicesId;
    private String name;
    private int price;

    @ManyToMany (mappedBy = "serviceMul")//, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Customers> customerMul = new ArrayList<>();

    public Services(int servicesId, String name, int price) {
        this.servicesId = servicesId;
        this.name = name;
        this.price = price;
    }

    public Services() {
    }

    public int getServicesId() {
        return servicesId;
    }

    public void setServicesId(int servicesId) {
        this.servicesId = servicesId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public List<Customers> getCustomerMul() {
        return customerMul;
    }

    public void setCustomerMul(List<Customers> customerMul) {
        this.customerMul = customerMul;
    }
}
