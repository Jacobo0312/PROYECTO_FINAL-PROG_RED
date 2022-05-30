package edu.co.icesi.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.co.icesi.demo.models.SensorModel;
import edu.co.icesi.demo.services.SensorService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/sensors")
public class SensorController {

    @Autowired
    SensorService sensorService;

    @GetMapping("/all")
    public ArrayList<SensorModel> getSensors() {
        return sensorService.getSensors();
    }


    @PostMapping("/register")
    public SensorModel saveSensorModel(@RequestBody SensorModel sensorModel) {
        return sensorService.saveSensorModel(sensorModel);
    }




    
    
}
