const labelUser=document.getElementById('labelUser');
const close=document.getElementById('close');
const register=document.getElementById('register');
const register_sector=document.getElementById('register_sector');
const register_sensor=document.getElementById('register_sensor');
const manage=document.getElementById('manage');


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