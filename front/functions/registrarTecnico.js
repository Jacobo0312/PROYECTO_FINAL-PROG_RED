const select = document.getElementById('selectTec')
const submit = document.getElementById('submitForm')

const getData = async () =>{
    const url = 'http://localhost:8080/users/all'
    const res = await fetch(url,{method:'GET'})
    const data = await res.json()
    return data
}
 
async function fillSelector(){
    const data = await getData()
    data.forEach(user => {
        if(user.sectorId == null){
            select.innerHTML += `<option value=${user.id}>${user.name}</option>`
        }
    });
}

fillSelector()

const onClick = () =>{
    
    alert(select.options[select.selectedIndex].value)
}

submit.addEventListener('click', onClick)
