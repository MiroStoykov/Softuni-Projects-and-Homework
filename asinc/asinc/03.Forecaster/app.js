function attachEvents() {

    const forecast = document.getElementById(`forecast`);
    const currentDiv = document.getElementById(`current`);
    const upcoming = document.getElementById(`upcoming`);

    const input = document.getElementById(`location`);
    const weatherBtn = document.getElementById(`submit`).addEventListener(`click`, onClick);

    const url = `http://localhost:3030/jsonstore/forecaster/locations`;
    const urlCurrent = `http://localhost:3030/jsonstore/forecaster/today/`;
    const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/`;

    const conditionSimbols = {
        Sunny: `&#x2600`,
        Overcast: `&#x2601`,
        Rain: `&#x2614`,
        Degrees: `&#176`
    }
    conditionSimbols[`Partly sunny`] = `&#x26C5`;


    async function onClick() {
        try {
            const locations = await fetch(url);
            const data = await locations.json();
            const result = data.find(a => a.name == input.value);

            currentConditions(result);

            forecastConditions(result);

        } catch (error) {
            forecast.textContent = `Error`;
            forecast.style.display = `block`;
        }
    }

    async function currentConditions(obj) {
        try {
            const current = await fetch(urlCurrent + obj.code);
            const data = await current.json();
            const condition = data.forecast.condition;

            currentDiv.innerHTML += `<div class="forecasts"><span class="condition symbol">${conditionSimbols[condition]}</span><span class="condition"><span class="forecast-data">${data.name}</span><span class="forecast-data">${data.forecast.low}${conditionSimbols.Degrees}/${data.forecast.high}${conditionSimbols.Degrees}</span><span class="forecast-data">${data.forecast.condition}</span></span></div>`;

            forecast.style.display = `block`;
        } catch (error) {
            forecast.textContent = `Error`;
            forecast.style.display = `block`;
        }

    }

    async function forecastConditions(obj) {
        try {
            const current = await fetch(urlUpcoming + obj.code);
            const data = await current.json();
            const condition = Object.entries(data.forecast);
            const forecastInfoDiv = document.createElement(`div`);
            forecastInfoDiv.classList += `forecast-info`;
            console.log(condition);
            for (const i of condition) {
                let icon = i[1].condition;
                forecastInfoDiv.innerHTML += `<span class="upcoming"><span class="simbol">${conditionSimbols[icon]}</span><span class="forecast-data">${i[1].low}${conditionSimbols.Degrees}/${i[1].high}${conditionSimbols.Degrees}</span><span class="forecast-data">${i[1].condition}</span></span><span class="umpcoming"></span><span class="umpcoming"></span></div>`
            }
            upcoming.appendChild(forecastInfoDiv);
        } catch (error) {
            forecast.textContent = `Error`;
            forecast.style.display = `block`;
        }

    }
}

attachEvents();