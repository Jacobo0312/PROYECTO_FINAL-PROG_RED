const labelUser=document.getElementById('labelUser');

const init = () => {
    labelUser.innerHTML = "asdas";
    let json=localStorage.getItem('user');
    let user = JSON.parse(json);
    labelUser.innerHTML = user.role.role+": "+user.user
}

init();