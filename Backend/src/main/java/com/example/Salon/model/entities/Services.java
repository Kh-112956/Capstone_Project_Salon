package com.example.Salon.model.entities;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table
public class Services {
    @Id
   // @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int ServicesId;
    private String name;
    private int price;

//@ManyToMany (mappedBy ="Services")
//private List<Customers> Customer = new ArrayList<>();

    public Services (int ServiceId, String name, int price) {
       this. ServicesId = ServiceId;
        this.name = name;
        this.price = price;
    }

    public Services() {
    }

    public int getServicesId() {
        return ServicesId;
    }

    public void setServicesId(int servicesId) {
        ServicesId = servicesId;
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

    @Override
    public String toString() {
        return "Services{" +
                "ServicesId=" + ServicesId +
                ", name='" + name + '\'' +
                ", price='" + price + '\'' +
                '}';
    }
}
