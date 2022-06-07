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

        let value = document.getElementById('valueSensor');
        //let unit = document.getElementById('unitSensor');
        var hour = Date.now();

        console.log(hour);

        measure = {
            "time" : hour,
            "measure":  value,
            "sensor_id": this.sensor.id
        }

        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(measure)
        }

        const res = fetch('/sensors/add', config);
        const data = res.json();


    }

}
