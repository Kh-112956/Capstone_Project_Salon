package com.example.Salon.controller;

import com.example.Salon.model.entities.Customers;
import com.example.Salon.model.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping(path = "api/customer")
public class CustomerController<customerService> {

    private CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<Customers> getCustomer() {
        return customerService.getCustomer();
    }


    @GetMapping(path = "{customerId}")
    public Optional<Customers> getcustomer(@PathVariable(name = "customerId") Integer customerId) {
        return customerService.getCustomer(customerId);
    }

    @PostMapping(path= "add")
    public void registerNewEmployee(@RequestBody Customers customers){
        customerService.addNewCustomer(customers);
    }
    @DeleteMapping(path = "delete/{customerId}")
    public void deletecustomer(@PathVariable ("customerId") Integer customerId){
        customerService.deleteCustomer(customerId);
    }
}