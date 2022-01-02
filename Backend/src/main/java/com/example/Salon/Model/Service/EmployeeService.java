package com.example.Salon.Model.Service;
//import com.example.Salon.Model.Entities.Appointment;
import com.example.Salon.Model.Entities.Employee;
//import com.example.Salon.Model.Repository.AppointmentRepository ;
import com.example.Salon.Model.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    private EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployee(Integer employeeId) {
        return employeeRepository.findById(employeeId);
    }

    public void addNewEmployee(Employee employee) {
        employeeRepository.save(employee);

    }
    public void deleteEmployee(Integer employeeId) {
        employeeRepository.deleteById(employeeId);

    }
}
