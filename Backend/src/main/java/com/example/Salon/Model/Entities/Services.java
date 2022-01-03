package com.example.Salon.Model.Entities;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Table
public class Services {
    @Id
    private int id;
    private String sname;
    private double price ;
    private String materials;
    @JsonIgnore
    @ManyToMany(mappedBy = "customerServices")
    Set<Customers> servicescustomer;
    @JsonIgnore
    @ManyToMany(mappedBy = "empolyeeServices")
    Set<Employee> servicesemployee;

    public Set<Customers> getServicescustomer() {
        return servicescustomer;
    }

    public void setServicescustomer(Set<Customers> servicescustomer) {
        this.servicescustomer = servicescustomer;
    }

    public Set<Employee> getServicesemployee() {
        return servicesemployee;
    }

    public void setServicesemployee(Set<Employee> servicesemployee) {
        this.servicesemployee = servicesemployee;
    }

    public Services(int id, String sname, double price, String materials){

        this.id= id ;
        this.sname = sname ;
        this.price = price ;
        this.materials = materials ;

    }
    public Services(){}

    public void setId(int id) {
        this.id = id;
    }
    public String getMaterials() {
        return materials;
    }

    public void setMaterials(String materials) {
        this.materials = materials;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public String getSname() {
        return sname;
    }

    public double getPrice() {
        return price;
    }
}
