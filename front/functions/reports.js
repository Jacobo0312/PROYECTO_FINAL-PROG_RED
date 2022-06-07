document.getElementById('yesterday').onclick = function(){yesterdayDate()};
document.getElementById('today').onclick = function(){todayDate()};
document.getElementById('generate').onclick = function(){generateReport()};
document.getElementById('buttonCancel').onclick = function(){returnPage()};
let beginning = document.getElementById('begin');
let ending = document.getElementById('end');


function returnPage() {
   
    window.location.href = "menu_tec.html";
}

function yesterdayDate() {

    var date = new Date();
    date.setDate(date.getDate() - 1);
    beginning.value = date;
  
}
function generateReport() {
   
}   
function todayDate() {
   
    var date = new Date();
    ending.value = date;
}
