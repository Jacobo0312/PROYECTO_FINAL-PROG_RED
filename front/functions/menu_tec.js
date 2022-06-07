document.getElementById('reports').onclick = function(){reportsMethod()};
document.getElementById('addSensor').onclick = function(){addSensorMethod()};
document.getElementById('register').onclick = function(){registerData()};


function reportsMethod() {
   
    window.location.href = "registerMeasurements.html";
}
function addSensorMethod() {

    window.location.href = "reports.html";

}
function registerData() {
    
    window.location.href = "crearsensor.html";

}