let optionList = document.getElementById('sectorSelect');
document.getElementById('buttonCancel').onclick = function(){returnPage()};
document.getElementById('buttonCreate').onclick = function(){createSensor()};
let sensorID = documnet.getElementById('sensorID');

const getData = async()=>{


    let url = `http://localhost:8080/sensors/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    for(let  i in obj){
        let option=document.createElement('option');
        option.value=obj[i].id;
        option.innerHTML=obj[i].id;
        optionList.appendChild(option);
    }

   

}

function returnPage() {
   
    window.location.href = "menu_tec.html";
}

function createSensor() {

    var idNumber = sensorID.value;
    var selectSector = optionList.value;
    var selectType = optionList.value;
    if( idNumber != null && selectSector!=null && selectType!=null){

        var scaleVAR;

        if(selectType == "Humedad"){

            scaleVAR = "RH";
        }else if(selectType == "Temperatura"){
            scaleVAR = "Celsius";
        }else if(selectType == "CO2"){
            scaleVAR = "PPM";
        }else{
            scaleVAR = "PH";
        }



        let sensor ={

            id: idNumber,

            type: selectType,

            scale: scaleVAR,

            sector_id: selectSector


        }


        let json = JSON.stringify(sensor);
        let xhr = new XMLHttpRequest();

        xhr.open('POST','http://localhost:8080/sensors/register');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(json);

        window.alert('Sensor Registrado');

        window.location.href = "menu_tec.html";

    }


    //window.location.href = "menu_tec.html";
}



getData();

