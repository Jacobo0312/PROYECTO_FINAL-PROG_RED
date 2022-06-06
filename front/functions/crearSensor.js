let optionList = document.getElementById('sectorSelect');
document.getElementById('buttonCancel').onclick = function(){returnPage()};
document.getElementById('buttonCreate').onclick = function(){createSensor()};


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
   
    //window.location.href = "menu_tec.html";
}



getData();

