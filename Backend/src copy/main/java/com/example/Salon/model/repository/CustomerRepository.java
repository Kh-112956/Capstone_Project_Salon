package com.example.Salon.model.repository;

import com.example.Salon.model.entities.Customers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customers,Integer> {
}
