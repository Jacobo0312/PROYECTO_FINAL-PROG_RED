let optionList = document.getElementById('sectorSelect');
document.getElementById('buttonCancel').onclick = function(){returnPage()};
document.getElementById('buttonCreate').onclick = function(){createSensor()};


const getData = async()=>{


    let url = `http://localhost:8080/Parcial2Api/api/sensors/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    console.log(obj);
    for(let  i in obj){

        let option = new Option(obj[i].id,obj[i].id); 
        optionList.add(option);

    }

   

}

function returnPage() {
   
    window.location.href = "menu_tec.html";
}
function createSensor() {
   
    //window.location.href = "menu_tec.html";
}



getData();

