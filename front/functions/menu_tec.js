document.getElementById('reports').onclick = function(){reportsMethod()};
document.getElementById('addSensor').onclick = function(){addSensorMethod()};
document.getElementById('register').onclick = function(){registerData()};


const init = () => {
    labelUser.innerHTML = "ERROR";
    let json=localStorage.getItem('user');
    let user = JSON.parse(json);
    if(user!=null){
    labelUser.innerHTML = "TECNICO: "+user.user+"Sector: "+user.sectorId.id
    }
}

init();

function reportsMethod() {
    window.location.href = "reports.html";

}
function addSensorMethod() {

    window.location.href = "crearsensor.html";

}
function registerData() {
    
    window.location.href = "registerMeasurements.html";


}