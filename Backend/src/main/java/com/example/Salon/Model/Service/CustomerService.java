package com.example.Salon.Model.Service ;


import com.example.Salon.Model.Entities.Customers;
import com.example.Salon.Model.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customers> getCustomer() {
        return customerRepository.findAll();
    }

    public Optional<Customers> getCustomer(Integer customerId) {
        return customerRepository.findById(customerId);
    }

    public void addNewCustomer(Customers customers) {
        customerRepository.save(customers);

    }
    public void deleteCustomer(Integer CustomersId) {
        customerRepository.deleteById(CustomersId);

    }
}