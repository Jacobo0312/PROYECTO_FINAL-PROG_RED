package edu.co.icesi.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.co.icesi.demo.models.RoleModel;
import edu.co.icesi.demo.repositories.RoleRepository;

@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;


    public ArrayList<RoleModel> getRoles() {
    
        return (ArrayList<RoleModel>)roleRepository.findAll();
    }

   public RoleModel getRole(int id) {
    Optional<RoleModel> roleResponse =  roleRepository.findById((long)id);
    RoleModel student = roleResponse.get();
    return student;
    }


    public RoleModel saveRoleModel(RoleModel roleModel) {
        return roleRepository.save(roleModel);
    }
    
}
