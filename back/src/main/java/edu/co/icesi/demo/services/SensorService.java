
package edu.co.icesi.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.co.icesi.demo.models.SensorModel;
import edu.co.icesi.demo.repositories.SensorRepository;

@Service
public class SensorService {

    @Autowired
    SensorRepository sensorRepository;


    public ArrayList<SensorModel> getSensors() {
        return (ArrayList<SensorModel>)sensorRepository.findAll();
    }


    public SensorModel saveSensorModel(SensorModel sensorModel) {
        return sensorRepository.save(sensorModel);
    }



    
}
