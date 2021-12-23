package com.example.Salon.model.service;
import com.example.Salon.model.entities.Services;
import com.example.Salon.model.repository.ServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;
import java.util.Optional;
@Service
public class ServicesService {
private ServicesRepository servicesRepository;

@Autowired

    public ServicesService(ServicesRepository servicesRepository) {
        this.servicesRepository = servicesRepository;
    }

    public List<Services> getServices (){
    return servicesRepository.findAll();
    }

   public Optional<Services>getServices(Integer servicesId){
    return servicesRepository.findById(servicesId);
    }
    public void addNewServices (Services services ){
    servicesRepository.save(services);
    }
    public void deleteServices(Integer servicesId){
        servicesRepository.deleteById(servicesId);
    }

}
