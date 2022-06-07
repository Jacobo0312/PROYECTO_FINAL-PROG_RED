const sectors=document.getElementById("sectors");
const engi=document.getElementById("engi");
const tec=document.getElementById("tec");
const close=document.getElementById("close");


const getData = async()=>{


    let url = `https://proyectofinal-prog.herokuapp.com/sectors/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    for(let  i in obj){
        sectors.innerHTML+= `<li class="list-group-item d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <div class="ms-3">
            <p class="fw-bold mb-1">${obj[i].id}</p>
          </div>
        </div>
        </li> `;
    }


     url=`https://proyectofinal-prog.herokuapp.com/users/all`;
     response = await fetch(url, {method:'GET'} );
        obj = await response.json();
        for(let  i in obj){


            let person=obj[i].name+", "+obj[i].sectorId.id;

           
            if(obj[i].role.id==2){
            engi.innerHTML+= `<li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="ms-3">
                <p class="fw-bold mb-1">${person}</p>
              </div>
            </div>
            </li> `;
            }else{
                
            tec.innerHTML+= `<li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="ms-3">
                <p   class="fw-bold mb-1">${person}</p>
              </div>
            </div>
            </li> `;

            }


    



    }







 

}

close.addEventListener("click",()=>{
    window.location.href="menu_admin.html";
}
)


getData();
