package com.example.Salon.Model.Entities;
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

    @ManyToMany(mappedBy = "customerServices")
    Set<Customers> servicescustomer;

    @ManyToMany(mappedBy = "empolyeeServices")
    Set<Employee> servicesemployee;

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
