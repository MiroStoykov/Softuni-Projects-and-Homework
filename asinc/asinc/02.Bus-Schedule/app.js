function solve() {

    const infoBox = document.querySelector(`.info`);
    const departBtn = document.getElementById(`depart`);
    const arriveBtn = document.getElementById(`arrive`);


    let stop = {
        nextStop: `depot`,
        firstStop: `depot`
    };

    let url = `http://localhost:3030/jsonstore/bus/schedule/`;

    async function depart() {
        try {
            const result = await fetch(url + stop.firstStop);
            const data = await result.json();
            infoBox.textContent = `Next stop ${data.name}`;
            arriveBtn.disabled = false;
            departBtn.disabled = true;
        } catch (error) {
            arriveBtn.disabled = true;
            departBtn.disabled = true;
            infoBox.textContent = `Error`;
        }
    }

    async function arrive() {
        try {
            const result = await fetch(url + stop.firstStop);
            const data = await result.json();
            infoBox.textContent = `Arriving at ${data.name}`;
            stop.firstStop = data.next;
            arriveBtn.disabled = true;
            departBtn.disabled = false;
        } catch (error) {
            arriveBtn.disabled = true;
            departBtn.disabled = true;
            infoBox.textContent = `Error`;
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();