package com.example.Salon.model.config;

import com.example.Salon.model.repository.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class CustomerConfig {

    @Bean
    CommandLineRunner commandLineRunner1 (CustomerRepository repository){
        return args -> {


            repository.saveAll(List.of());

        };
    }
}