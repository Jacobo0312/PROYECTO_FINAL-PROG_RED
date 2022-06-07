const sensorsContainer = document.getElementById('sensorsContainer');

const getSensorAPI = async() => {

    let url = `https://proyectofinal-prog.herokuapp.com/sensors/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    for(let  i in obj){
    
        if(obj[i].sector_id.id=="Sector 1"){
        let sensor = new Sensors(obj[i].id, obj[i].type, obj[i].scale, obj[i].sector_id);
        let component = new registerMeasure(sensor);
        component.render(sensorsContainer);
        }


    }

}

getSensorAPI();