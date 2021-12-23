package com.example.Salon.model.repository;

import com.example.Salon.model.entities.Services;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//import org.springframework.stereotype.Service;

@Repository
public interface ServicesRepository extends JpaRepository  <Services, Integer> {

}
