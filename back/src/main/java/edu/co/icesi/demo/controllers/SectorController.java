package edu.co.icesi.demo.controllers;

import java.io.Console;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.co.icesi.demo.models.SectorModel;
import edu.co.icesi.demo.services.SectorService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/sectors")
public class SectorController {

    @Autowired
    SectorService sectorService;


    @GetMapping("/all")
    public ArrayList<SectorModel> getSectors() {
        return sectorService.getSectors();
    }


    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = "application/json")
    public SectorModel saveSectorModel(@RequestBody SectorModel sectorModel) {
        return sectorService.saveSectorModel(sectorModel);
    }
    
    
    
}
