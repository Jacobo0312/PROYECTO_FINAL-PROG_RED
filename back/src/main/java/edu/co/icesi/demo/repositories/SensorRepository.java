package edu.co.icesi.demo.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.co.icesi.demo.models.SensorModel;

@Repository
public interface SensorRepository  extends CrudRepository<SensorModel, Long> {

   
}
    

