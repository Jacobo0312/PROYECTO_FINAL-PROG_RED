package edu.co.icesi.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.co.icesi.demo.models.SectorModel;
import edu.co.icesi.demo.services.SectorService;

@RestController
@RequestMapping("/sectors")
public class SectorController {

    @Autowired
    SectorService sectorService;


    @GetMapping("/all")
    public ArrayList<SectorModel> getSectors() {
        return sectorService.getSectors();
    }
    
    
    
}