package com.example.Salon.Controller;
import com.example.Salon.Model.Entities.Employee;
import com.example.Salon.Model.Service.EmployeeService;
import com.example.Salon.Model.Service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping(path = "api/security")
public class SecurityController {

    private SecurityService securityService ;
    @Autowired
    public SecurityController (SecurityService securityService){ this.securityService = securityService ;}
    @PostMapping(path= "login")
    public String login(@RequestBody Employee employee){
       return  securityService.getCheck(employee.getEmail(), employee.getPassword());
    }
}
