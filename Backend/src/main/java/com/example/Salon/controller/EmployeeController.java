package com.example.Salon.controller;

/*import com.example.Salon.model.entities.Customers;
import com.example.Salon.model.entities.Services;
import com.example.Salon.model.service.CustomerService;
import com.example.Salon.model.service.ServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

public class EmployeeController {
    private ServicesService servicesService;

    @Autowired
    public ServicesController(ServicesService servicesService) {
        this.servicesService = servicesService;
    }

    @GetMapping
    public List<Services> getService() {
        return ServicesService.getServices();
    }


    @GetMapping(path = "{servicesId}")
    public Optional<Services> getServices(@PathVariable(name = "servicesId") Integer servicesId) {
        return servicesService.getServices(servicesId);
    }

    @PostMapping(path= "add")
    public void registerNewServices(@RequestBody ServicesService){
        servicesService.addNewServices(Services);
    }
    @DeleteMapping(path = "delete/{serviceId}")
    public void deleteservices(@PathVariable ("serviceId") Integer serviceId){
        ServicesService.deleteServices(serviceId);
    }
}
}*/
