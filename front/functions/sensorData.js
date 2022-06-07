const sensorsContainer = document.getElementById('sensorsContainer');

const getSensorAPI = async() => {

    /*let url = `http://localhost:8080/sensors/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    for(let  i in obj){
        let sensor = new Sensors(obj[i].id, obj[i].type, obj[i].scale, obj[i].sector_id);
        let component = new registerMeasure(sensor);
        component.render(sensorsContainer);
    }*/

    let response = [{"id":"Sensor Zona Este","type":"Humedad","scale":"RH","sector_id":{"id":"Sector 1"}},{"id":"Sensor Zona Este Sec","type":"Temperatura","scale":"Celsius","sector_id":{"id":"Sector 2"}},{"id":"Sensor Zona Norte","type":"CO2","scale":"PPM","sector_id":{"id":"Sector 1"}},{"id":"Sensor Zona Norte Se","type":"PH","scale":"PH","sector_id":{"id":"Sector 5"}},{"id":"Sensor Zona Oeste","type":"PH","scale":"pH","sector_id":{"id":"Sector 1"}},{"id":"Sensor Zona Oeste Se","type":"CO2","scale":"PPM","sector_id":{"id":"Sector 3"}},{"id":"Sensor Zona Sur","type":"Temperatura","scale":"Celsius","sector_id":{"id":"Sector 1"}}];
    let obj = JSON.stringify(response);
    
    console.log(obj)
    for(let  i in obj){
        let sensor = new Sensors(obj[i].id, obj[i].type, obj[i].scale, obj[i].sector_id);
        let component = new registerMeasure(sensor);
        component.render(sensorsContainer);
    }

}

getSensorAPI();