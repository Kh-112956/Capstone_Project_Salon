package com.example.Salon.Model.Repository;
import com.example.Salon.Model.Entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmployeeRepository extends JpaRepository<Employee,Integer>{
    @Query("SELECT email  FROM Employee WHERE email = :email AND password = :password ")
    String findByEmailAngdPassword(@Param("email") String email , @Param("password") String password) ;
    @Query("SELECT password FROM Employee WHERE email = :email" )
    String findPasswordByEmail(@Param("email") String email);

    @Query("select case when count(email) > 0 then true else false end from Employee where email = :email")
    Boolean existsByEmail(@Param("email") String email);
}
