package edu.co.icesi.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.co.icesi.demo.models.RoleModel;
import edu.co.icesi.demo.services.RoleService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/roles")
public class RoleController {

    @Autowired
    RoleService roleService;


    @GetMapping("/all")
    public ArrayList<RoleModel> getRoles() {
        return roleService.getRoles();
    }

    @GetMapping("/{id}")
   public RoleModel findById(@PathVariable int id) {
       return roleService.getRole(id);
    }
 
    
    
}
