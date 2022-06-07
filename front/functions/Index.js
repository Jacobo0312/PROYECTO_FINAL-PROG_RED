const inputUser = document.getElementById('inputUser');
const inputPassword = document.getElementById('inputPassword');
const signInBtn = document.getElementById('signInBtn');




const signIn = () => {

    let user = new User(inputUser.value, inputPassword.value);


    let url = "http://proyectofinal-prog.herokuapp.com/users/login";
    fetch(url, { method: 'POST', body: user.serialize(), headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json())
        .then(data => {
            let user = JSON.stringify(data);
            window.localStorage.setItem('user', user);
            switch (data.role.role) {
                case 'TECHNICIAN':
                    window.location.href = "menu_tec.html"
                    break
                case 'ENGINEER':
                    window.location.href = "menu_engi.html"
                    break
                default:
                    window.location.href = "menu_admin.html"
                    break
            }
        }
        )
        .catch(error => {
            console.log(error)
            alert("Usuario o contraseña incorrectos");
        });



    //clean
    inputUser.value = "";
    inputPassword.value = "";




};


signInBtn.addEventListener('click', signIn)




