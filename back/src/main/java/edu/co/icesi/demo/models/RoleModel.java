package edu.co.icesi.demo.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "role")
public class RoleModel {

    @Id
    private long id;
    private String role;

    public RoleModel() {
    }

    public RoleModel(int id, String role) {
        this.id = id;
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "RoleModel{" +
                "id=" + id +
                ", role='" + role + '\'' +
                '}';
        
    }

    
}
