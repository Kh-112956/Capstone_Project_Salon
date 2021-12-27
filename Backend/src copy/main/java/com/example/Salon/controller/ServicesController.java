package com.example.Salon.controller;

import com.example.Salon.model.entities.Services;
import com.example.Salon.model.service.ServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
@CrossOrigin (origins = "http://localhost:8080")
@RestController
@RequestMapping(path = "api/Services")
public class ServicesController <serviceService>{
    private ServicesService servicesService;

    @Autowired
    public ServicesController(ServicesService servicesService) {
        this.servicesService = servicesService;
    }
    @GetMapping
    public List<Services> getServices(){
        return servicesService.getServices();
    }

    @GetMapping(path = "{servicesId}")
    public Optional<Services> getServices(@PathVariable(name = "servicesId") Integer servicesId) {
        return servicesService.getService(servicesId);
    }

    @PostMapping(path = "add")
    public void registerNewServices(@RequestBody Services services){
        servicesService.addNewServices(services);
    }
    @DeleteMapping(path = "delete/{servicesId}")
    public void deleteServices(@PathVariable("servicesId") Integer servicesId){
        servicesService.deleteServices(servicesId);
    }
}
