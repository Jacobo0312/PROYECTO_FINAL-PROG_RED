const close=document.getElementById('close');
const firstName=document.getElementById('firstName');
const lastName=document.getElementById('lastName');
const natID=document.getElementById('natID');
const pass=document.getElementById('pass');




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
    window.location.href = "menu_admin.html";
});
