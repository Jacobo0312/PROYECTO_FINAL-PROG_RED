const labelUser=document.getElementById('labelUser');
const close=document.getElementById('close');


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