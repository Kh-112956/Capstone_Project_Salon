package com.example.Salon.Model.Service;
import com.example.Salon.Model.Entities.Appointment;
import com.example.Salon.Model.Repository.AppointmentRepository ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {
private  AppointmentRepository appointmentRepository;
    @Autowired
public AppointmentService(AppointmentRepository appointmentRepository) {

        this.appointmentRepository = appointmentRepository;
    }
    public List<Appointment> getAppointments () {
        return appointmentRepository.findAll();
    }

    public Optional<Appointment> getAppointment(Integer appointmentId) {
        return appointmentRepository.findById(appointmentId);
    }

    public void addNewAppointment(Appointment appointment) {
        appointmentRepository.save(appointment);

    }
    public  void deleteAppointment (Integer appointmentTd) {
        appointmentRepository.deleteById(appointmentTd);

  }
}