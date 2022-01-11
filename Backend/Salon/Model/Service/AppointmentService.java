package com.example.Salon.Model.Service;
import com.example.Salon.Model.Entities.Appointment;
import com.example.Salon.Model.Dto.AppointmentDto ;
import com.example.Salon.Model.Entities.Customers;
import com.example.Salon.Model.Entities.Employee;
import com.example.Salon.Model.Entities.Services;
import com.example.Salon.Model.Repository.AppointmentRepository ;
import com.example.Salon.Model.Repository.CustomerRepository;
import com.example.Salon.Model.Repository.EmployeeRepository;
import com.example.Salon.Model.Repository.ServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {
    private AppointmentRepository appointmentRepository;
    private EmployeeRepository employeeRepository ;
    private CustomerRepository customerRepository ;
    private ServicesRepository servicesRepository ;
    @Autowired
    public AppointmentService(AppointmentRepository appointmentRepository ,EmployeeRepository employeeRepository ,CustomerRepository customerRepository , ServicesRepository servicesRepository ) {
        this.appointmentRepository = appointmentRepository;
        this.employeeRepository = employeeRepository ;
        this.customerRepository = customerRepository ;
        this.servicesRepository = servicesRepository ;
    }

    public List<Appointment> getAppointments() {
        return appointmentRepository.findAll();
    }

    public Optional<Appointment> getAppointment(Integer appointmentId) {
        return appointmentRepository.findById(appointmentId);
    }

    public void addNewAppointment(Appointment appointment) {
        appointmentRepository.save(appointment);

    }
    public void addNewAppointmentCustomer(AppointmentDto appointmentDto) {
        Services services = servicesRepository.getById(appointmentDto.getServiceId()) ;
        Employee employee = employeeRepository.getById(appointmentDto.getEmployeeId()) ;
        Customers customers = new Customers();
        customers.setCity(appointmentDto.getCity());
        customers.setFname(appointmentDto.getFname());
        customers.setGender(appointmentDto.getGender());
        customers.setLname(appointmentDto.getLname());
        customers.setPhone(appointmentDto.getPhone());
        customers.setState(appointmentDto.getState());
        customers = customerRepository.save(customers) ;
        Appointment appointment=new Appointment() ;
        appointment.setCustomers(customers);
        appointment.setServices(services);
        appointment.setEmployee(employee);
        appointment.setTime(appointmentDto.getDate());
        appointmentRepository.save(appointment) ;


    }
    public void deleteAppointment(Integer appointmentId) {
        appointmentRepository.deleteById(appointmentId);

    }
}
