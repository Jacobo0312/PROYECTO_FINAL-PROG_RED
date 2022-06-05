let optionList = document.getElementById('sectorSelect');

const getData = async()=>{


    let url = `http://localhost:8080/Parcial2Api/api/sensors/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
    console.log(obj);
    for(let  i in obj){

        let option = new Option(obj[i].id,obj[i].id); 
        optionList.add(option);

    }

   

    return names;

}

