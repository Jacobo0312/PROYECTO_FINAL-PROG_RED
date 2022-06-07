class registerMeasure {

    constructor(sensor) {
        this.sensor = sensor;
    }

    render(sensorsContainer) {
        let html = `
        <div class="card" style="width: 18rem; ">
            <div class ="card-body">
                <h5 class="card-title">SENSOR ID: <br>${this.sensor.id}</h5>
                <p class="card-title">TIPO DE SENSOR: <br>${this.sensor.type}</p>
            </div>
            <div class="card-answer">
                <h5 class="card-title">VALOR: </h5>
                <input type="text" id="valueSensor" name="valueSensor" /><br />
                <h5 class="card-title">UNIDAD: </h5>
                <input type="text" id="unitSensor" name="unitSensor" /><br />
            </div>
            <a href="#" id="button${this.sensor.id}" class="btn btn-primary">Registrar Medida</a>
        </div>
        `;

        let root = document.createElement('div');
        root.innerHTML = html.trim();
        sensorsContainer.appendChild(root.firstChild);

        let button = document.getElementById(`button${this.sensor.id}`);
        button.addEventListener('click',this.action.bind(this));

    }

    action(){
        
    }

}
