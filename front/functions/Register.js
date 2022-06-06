const close=document.getElementById('close');
const send=document.getElementById('send');
const user=document.getElementById('user');
const nameC=document.getElementById('name');
const natID=document.getElementById('natID');
const pass=document.getElementById('pass');
const rol=document.getElementById('rol');
 const sectors=document.getElementById('sectorSelect');




const init = () => {
    labelUser.innerHTML = "ERROR";
    let json=localStorage.getItem('user');
    let user = JSON.parse(json);
    if(user!=null){
    labelUser.innerHTML = user.role.role+": "+user.user
    }
}

init();



const getData = async()=>{


    let url = `http://localhost:8080/sectors/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    for(let  i in obj){
        let option=document.createElement('option');
        option.value=obj[i].id;
        option.innerHTML=obj[i].id;
        sectors.appendChild(option);
    }

   

}


getData();


send.addEventListener('click', (event) => {
    event.preventDefault();
    let roleID={
        id:parseInt(rol.value)
    }

    let sector={
        id:sectors.value
    }
    let person={
        id:natID.value,
        role:roleID,
        user:user.value,
        name:nameC.value,
        password:pass.value,
        sectorId:sector
    }
   
    let json=JSON.stringify(person);
    console.log(json);

    let url = `http://localhost:8080/users/register`;
    fetch(url, {method:'POST', body:json, headers:{'Content-Type':'application/json'}})
    .then(response => response.json())
    .then(data => {
        alert("Usuario registrado");
        window.location.href = "menu_admin.html";
    }
    )
    .catch(error => {
        alert("Usuario o contraseña incorrectos");
    }
    );

})


close.addEventListener('click', () => {
    window.location.href = "menu_admin.html";
});
