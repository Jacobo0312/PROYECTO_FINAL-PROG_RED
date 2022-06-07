document.getElementById('calculate').onclick = function(){calculate()};
document.getElementById('addTechn').onclick = function(){addTechn()};
document.getElementById('Dashboard').onclick = function(){Dashboard()};

const init = () => {
    labelUser.innerHTML = "ERROR";
    let json=localStorage.getItem('user');
    let user = JSON.parse(json);
    if(user!=null){
    labelUser.innerHTML = "INGENIERO: "+ +user.user+"Sector: "+user.sectorId.id
    }
}

init();


function calculate() {
   
    window.location.href = "calculateData.html";
}
function addTechn() {

    window.location.href = "regTecnico.html";

}
function Dashboard() {
    
    window.location.href = "Dashboard.html";

}