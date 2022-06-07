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
    
    
    var datebegin = beginning.value;
    var beginDate = new Date(datebegin);
    var milisBegin = beginDate.getTime();
    console.log(milisBegin);

    var endDate = ending.value;
    var dateEnd = new Date(endDate);
    var milisEnd = dateEnd.getTime();
    console.log(milisEnd);


}   
function todayDate() {
   
    var date = new Date();
    ending.value = date;
    endingInMilis = date.getTime();
    

}
