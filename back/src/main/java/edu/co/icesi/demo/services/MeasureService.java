package edu.co.icesi.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.co.icesi.demo.models.MeasureModel;
import edu.co.icesi.demo.repositories.MeasureRepository;

@Service
public class MeasureService {

    @Autowired
    MeasureRepository measureRepository;


    public ArrayList<MeasureModel> getMeasures() {
    
        return (ArrayList<MeasureModel>)measureRepository.findAll();
    }


    public MeasureModel saveMeasureModel(MeasureModel measureModel) {
    
        return measureRepository.save(measureModel);
    }

 
    
}
