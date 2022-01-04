package com.example.Salon.Model.Service;
import com.example.Salon.Model.Entities.Employee;
import com.example.Salon.Model.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class SecurityService {
    private EmployeeRepository employeeRepository ;
    @Autowired
    public SecurityService(EmployeeRepository employeeRepository){this.employeeRepository=employeeRepository;}
    public String getCheck(String email ,String password) {
        if( employeeRepository.findByEmailAngdPassword(email,password)==null  ) {
            return "invalid credentials";
        }else {
            return " Authenticated";
        }
    }

}
