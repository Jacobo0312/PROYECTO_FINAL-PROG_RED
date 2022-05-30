package edu.co.icesi.demo.repositories;


import java.util.ArrayList;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.co.icesi.demo.models.MeasureModel;

@Repository
public interface MeasureRepository  extends CrudRepository<MeasureModel, Long> {

    @Query("SELECT m FROM MeasureModel m WHERE m.time>=?1 AND m.time<=?2")
    ArrayList<MeasureModel> timeMeasures(long start, long finish);
}
    

