package com.example.Salon.Model.Entities;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table
public class Services {
    @Id
    private int id;
    private String sname;
    private double price ;
    public Services(int id, String sname, double price){

        this.id= id ;
        this.sname = sname ;
        this.price = price ;

    }
    public Services(){}

    public void setId(int id) {
        this.id = id;
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
