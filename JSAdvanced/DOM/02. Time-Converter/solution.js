function attachEventsListeners(event) {

    let daysBtn = document.getElementById("daysBtn");
    let hoursBtn = document.getElementById("hoursBtn");
    let minutesBtn = document.getElementById("minutesBtn");
    let secondsBtn = document.getElementById("secondsBtn");

    let days = document.getElementById(`days`);
    let hours = document.getElementById(`hours`);
    let minutes = document.getElementById(`minutes`);
    let seconds = document.getElementById(`seconds`);

    let buttons = [daysBtn, hoursBtn, minutesBtn, secondsBtn];

    for (const i of buttons) {
        i.addEventListener("click", onClick);
    }

    function onClick(e) {
        if (e.target.id == `daysBtn`) {
            let num = Number(days.value);
            hours.value = num * 24;
            minutes.value = num * 1440;
            seconds.value = num * 86400;
        }
        if (e.target.id == `hoursBtn`) {
            let num = Number(hours.value);
            days.value = (num / 24);
            minutes.value = num * 60;
            seconds.value = num * 3600;
        }
        if (e.target.id == `minutesBtn`) {
            let num = Number(minutes.value);
            hours.value = num / 60;
            days.value = num / 1440;
            seconds.value = num * 60;
        }
        if (e.target.id == `secondsBtn`) {
            let num = Number(seconds.value);
            hours.value = num / 3600;
            minutes.value = num / 60;
            days.value = num / 86400;
        }
    }

}