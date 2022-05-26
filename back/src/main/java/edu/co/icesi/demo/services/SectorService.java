package edu.co.icesi.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.co.icesi.demo.models.SectorModel;
import edu.co.icesi.demo.repositories.SectorRepository;

@Service
public class SectorService {

    @Autowired
    SectorRepository sectorRepository;


    public ArrayList<SectorModel> getSectors() {
        return (ArrayList<SectorModel>)sectorRepository.findAll();
    }


    public SectorModel saveRoleModel(SectorModel sectorModel) {
        return sectorRepository.save(sectorModel);
    }
    
}
