package com.example.Salon.Model.Entities;
import javax.persistence.*;

@Entity
@Table
public class Appointment {

    @Id
    private int id;
    private String data;
    private String time;
    private int service_id ;

    @ManyToOne
    @JoinColumn(name= "employee_id" ,referencedColumnName = "id")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name= "customer_id" ,referencedColumnName = "id")
    private Customers customers ;

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Customers getCustomers() {
        return customers;
    }

    public void setCustomers(Customers customers) {
        this.customers = customers;
    }

    public Appointment() {
    }

    public Appointment(int id, String data, String time, int service_id) {
        this.id = id;
        this.data = data;
        this.time = time;
        this.service_id = service_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getService_id() {
        return service_id;
    }

    public void setService_id(int service_id) {
        this.service_id = service_id;
    }
}
