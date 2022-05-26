package edu.co.icesi.demo.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.lang.Nullable;


@Entity
@Table(name = "user")
public class UserModel {

    @Id
    private String id;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private RoleModel role;
    private String name;
    private String user;
    private String password;

    @ManyToOne
    @JoinColumn(name = "sector_id")
    @Nullable
    private SectorModel sectorId;



    public UserModel(){

    }

    public UserModel(String id,RoleModel role, String name, String user, String password, SectorModel sectorId) {
        this.id = id;
        this.role = role;
        this.name = name;
        this.user = user;
        this.password = password;
        this.sectorId = sectorId;
    }



    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public RoleModel getRole() {
        return role;
    }
    public void setRole(RoleModel role) {
        this.role = role;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getUser() {
        return user;
    }
    public void setUser(String username) {
        this.user = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public SectorModel getSectorId() {
        return sectorId;
    }
    public void setSectorId(SectorModel sectorId) {
        this.sectorId = sectorId;
    }


    public String toString(){
        return "UserModel{" +
                "id='" + id + '\'' +
                ", role=" + role.getId() +
                ", name='" + name + '\'' +
                ", user='" + user + '\'' +
                ", password='" + password + '\'' +
                ", sectorId=" + sectorId +
                '}';
    }


    


    

 
    
}
