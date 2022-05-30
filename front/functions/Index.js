const inputUser = document.getElementById('inputUser');
const inputPassword = document.getElementById('inputPassword');
const signInBtn = document.getElementById('signInBtn');




const signIn = () => {

    let user = new User(inputUser.value,  inputPassword.value);


    let url = "http://localhost:8080/users/login";
    fetch(url, {method:'POST', body:user.serialize(), headers:{'Content-Type':'application/json'}})
    .then(response => response.json())
    .then(data => {
        let user = JSON.stringify(data);
       window.localStorage.setItem('user', user);
        window.location.href = "menu_admin.html";
    }
    )
    .catch(error => {
        alert("Usuario o contraseña incorrectos");
    });



    //clean
    inputUser.value = "";
    inputPassword.value = "";
    
    
   

};


signInBtn.addEventListener('click', signIn)




