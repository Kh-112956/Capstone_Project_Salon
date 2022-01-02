package com.example.Salon.Model.Repository;
import com.example.Salon.Model.Entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;



public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
}
