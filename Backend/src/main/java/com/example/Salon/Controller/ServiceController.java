package com.example.Salon.Controller;

import com.example.Salon.Model.Entities.Customers;
import com.example.Salon.Model.Entities.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping(path = "api/service")
public class ServiceController {
    private com.example.Salon.Model.Service.ServicesService servicesService;
    @Autowired
    public ServiceController(com.example.Salon.Model.Service.ServicesService servicesService) {
        this.servicesService = servicesService;
    }

    @GetMapping
    public List<Services> getService() {
        return servicesService.getService();
    }


    @GetMapping(path = "{serviceId}")
    public Optional<Services> getService(@PathVariable(name = "serviceId") Integer serviceId) {
        return servicesService.getService(serviceId);
    }

    @PostMapping(path= "add")
    public void registerService(@RequestBody Services services){
        servicesService.addNewService(services);
    }
    @DeleteMapping(path = "delete/{serviceId}")
    public void deleteservice(@PathVariable ("serviceId") Integer serviceId){
        servicesService.deleteService(serviceId);
    }


}
