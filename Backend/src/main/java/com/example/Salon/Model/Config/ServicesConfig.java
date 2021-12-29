package com.example.Salon.Model.Config;
import com.example.Salon.Model.Entities.Services;
import com.example.Salon.Model.Repository.ServicesRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.List;
@Configuration
public class ServicesConfig {

    @Bean
    CommandLineRunner commandLineRunner2 (ServicesRepository repository){
        return args -> {

            Services rrr=new Services(
                    1,
                    "Builder",
                    15.5

            );


            repository.saveAll(List.of(rrr));

        };
    }
}
