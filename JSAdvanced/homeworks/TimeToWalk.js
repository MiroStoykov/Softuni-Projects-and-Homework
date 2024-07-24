function solve(steps, footprint, speed) {

    let distance = steps * footprint;

    let breaks = Math.floor(distance / 500);

    let metersInSec = speed / 3.6;

    let time = distance / metersInSec + breaks * 60;

    let seconds = Math.round(time % 60);
    let mins = Math.floor(time / 60)
    let hours = Math.floor(mins / 60);
    mins -= hours * 60;

    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minsToPrint = mins < 10 ? `0${mins}` : `${mins}`;
    let secondsToPrint = seconds < 10 ? `0${seconds}` : `${seconds}`;


    console.log(`${hoursToPrint}:${minsToPrint}:${secondsToPrint}`);

}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);