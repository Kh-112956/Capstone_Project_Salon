package com.example.Salon.model.entities;

import javax.persistence.Id;

public class Service {
    @Id
    private int id;
    private String service_name;
    private int service_Price;

    public Service(int id, String service_name , int service_Price ) {
        this.id = id;
        this.service_name = service_name;
        this.service_Price = service_Price;


    }
}






