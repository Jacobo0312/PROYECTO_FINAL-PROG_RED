const sensorsContainer = document.getElementById('sensorsContainer');

const getSensorAPI = async() => {

    let url = `http://localhost:8080/sensors/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    for(let  i in obj){
        let sensor = new Sensors(obj[i].id, obj[i].type, obj[i].scale, obj[i].sector_id);
        let component = new registerMeasure(sensor);
        component.render(sensorsContainer);
    }

}

getSensorAPI();