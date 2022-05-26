package edu.co.icesi.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.co.icesi.demo.models.UserModel;
import edu.co.icesi.demo.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public ArrayList<UserModel> getUsers() {
        return (ArrayList<UserModel>)userRepository.findAll();
    }


    public UserModel saveUserModel(UserModel userModel) {
        return userRepository.save(userModel);
    }
    
}
