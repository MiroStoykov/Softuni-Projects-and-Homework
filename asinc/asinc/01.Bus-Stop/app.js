function getInfo() {
    const stopID = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    stopName.textContent = ``;
    buses.innerHTML = ``;
    buses.textContent = ``;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

    const result = fetch(url);

    result.then(response => {
        response.json().then(data => {

            stopName.textContent = data.name;
            append(data, buses);

        }).catch(err => {
            stopName.textContent = `Error`;
        })
    }).catch(err => {
        stopName.textContent = `Error`;
    })

    function append(data, ul) {
        for (const bus of Object.entries(data.buses)) {
            const li = document.createElement(`li`);
            li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            ul.appendChild(li);
        }
    }
}