package com.example.Salon.model.config;



import com.example.Salon.Model.Entities.Customers;
import com.example.Salon.Model.Repository.CustomerRepository;
//import com.example.salon.model.Repository.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class CustomerConfig {

   /* @Bean
    CommandLineRunner commandLineRunner1 (CustomerRepository repository){
        return args -> {

            Customers rrr=new Customers(
                    1,
                    "sara",
                    "ahmed",
                    04444444,
                    "buzy",
                    "femel",
                    "arar"
            );


            repository.saveAll(List.of(rrr));

        };
    }*/
}