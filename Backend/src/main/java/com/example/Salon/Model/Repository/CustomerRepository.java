package com.example.Salon.Model.Repository;

import com.example.Salon.Model.Entities.Customers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customers,Integer> {
}
