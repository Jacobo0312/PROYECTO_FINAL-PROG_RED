class registerMeasure {

    constructor(sensor) {
        this.sensor = sensor;
    }

    render(container) {

        let html = `
        <div class="card" style="width: 18rem; ">
            <div class ="card-body">
                <h5 class="card-title">SENSOR ID: ${this.sensor.id}</h5>
                <p class="card-subtitle">TIPO DE SENSOR: ${this.sensor.type}</p>
            </div>
            <div class="card-answer">
                <h5 class="card-title-sub">VALOR:  </h5>
                <input type="text" id="valueSensor" class="valueSensor" /><br />
            </div>
            <br/>
            <a href="#" id="button${this.sensor.id}" class="btn btn-primary">Registrar Medida</a>
        </div>
        `;

        let root = document.createElement('div');
        root.innerHTML = html.trim();
        container.appendChild(root.firstChild);

        let button = document.getElementById(`button${this.sensor.id}`);
        button.addEventListener('click',this.action.bind(this));

    }

    action(event){
        event.preventDefault();

        let value = document.getElementById('valueSensor').value;
        //let unit = document.getElementById('unitSensor');
        var hour = Date.now();

        console.log(hour);

        let sensor={
            id: this.sensor.id
        }


        let measureVAR = {
            time : hour,
            measure:  parseInt(value),
            sensor: sensor
        }

    
       let json = JSON.stringify(measureVAR);
       console.log(json);
       let xhr = new XMLHttpRequest();

       xhr.open('POST','https://proyectofinal-prog.herokuapp.com/measures/add');
       xhr.setRequestHeader('Content-Type','application/json');
       xhr.send(json);

       window.alert('Medicion Registrada');

       window.location.href = "menu_tec.html";
    }

}
