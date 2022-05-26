package edu.co.icesi.demo.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sector")
public class SectorModel {

    @Id
    private String id;

    public String getSector() {
        return id;
    }

    public void setSector(String id) {
        this.id = id;
    }

    
}
