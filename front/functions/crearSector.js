document.getElementById('cancel').onclick = function(){returnPage()};
document.getElementById('createSector').onclick = function(){createSector()};
let sectorID = document.getElementById('sectorID');


function returnPage() {
   
    window.location.href = "menu_admin.html";
}
function createSector() {
   
   if(sectorID.value == null){



   }else{   

    let sector ={

        id: sectorID.value
        
    }
    console.log("llego a la linea 23");
    let json = JSON.stringify(sector);
    console.log(json);
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://proyectofinal-prog.herokuapp.com/sectors/add');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(json);

    window.alert('Sector Registrado');

    window.location.href = "menu_admin.html";

   }


}

