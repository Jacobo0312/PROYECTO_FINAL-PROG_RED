const labelUser=document.getElementById('labelUser');
const close=document.getElementById('close');
const register=document.getElementById('register');
const register_sector=document.getElementById('register_sector');
const register_sensor=document.getElementById('register_sensor').onclick = function(){registerSensor()};
const manage=document.getElementById('manage').onclick = function(){loadManage()};

const init = () => {
    labelUser.innerHTML = "ERROR";
    let json=localStorage.getItem('user');
    let user = JSON.parse(json);
    if(user!=null){
    labelUser.innerHTML = user.role.role+": "+user.user
    }
}

init();


close.addEventListener('click', () => {
    window.localStorage.removeItem('user');
    window.location.href = "index.html";
})


register.addEventListener('click', () => {
    window.location.href = "register_person.html";
}
)

function registerSensor() {
   
    window.location.href = "crearsensor.html";
}
function loadManage() {
   
    window.location.href = "manage.html";
}

