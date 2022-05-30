package edu.co.icesi.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.co.icesi.demo.models.UserModel;
import edu.co.icesi.demo.services.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;


    @GetMapping("/all")
    public ArrayList<UserModel> getUsers() {
        return userService.getUsers();
    }


    @PostMapping("/register")
    public UserModel saveUserModel(@RequestBody UserModel userModel) {
        return userService.saveUserModel(userModel);
    }


    //login
    @RequestMapping(value = "/login",method = RequestMethod.POST,consumes = "application/json")
      public UserModel loginUserModel(@RequestBody UserModel userModel) {
        return userService.loginUserModel(userModel);
    }


    
    
}
