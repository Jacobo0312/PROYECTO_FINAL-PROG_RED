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

const onClick = (event) =>{
    event.preventDefault()
    const fun = async () =>{
        const data = await getData()
        let json=localStorage.getItem('user');
        let storage = JSON.parse(json);
        data.forEach(async user => {
            if(user.id == select.options[select.selectedIndex].value){
                user.sectorId = storage.sectorId
                const query = await fetch('http://localhost:8080/users/modify', {method:'POST',body:JSON.stringify(user),headers:{'Content-Type':'application/json'}})
                const res = await query.json()
                console.log(res)
            }
        });
    }
    fun()
}

submit.addEventListener('click', onClick)
