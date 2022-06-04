package edu.co.icesi.demo.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "measure")
public class MeasureModel {


    @Id
    private long time;
    private double measure;
    @ManyToOne
    @JoinColumn(name = "sensor_id")
    private SensorModel sensor;


    public MeasureModel() {
    }


    public MeasureModel(long time, double measure, SensorModel sensor) {
        this.time = time;
        this.measure = measure;
        this.sensor = sensor;
    }


    public long getTime() {
        return time;
    }


    public void setTime(long id) {
        this.time = id;
    }


    public double getMeasure() {
        return measure;
    }


    public void setMeasure(double measure) {
        this.measure = measure;
    }


    public SensorModel getSensor() {
        return sensor;
    }


    public void setSensor(SensorModel sensor) {
        this.sensor = sensor;
    }


    


    

    

    
}
