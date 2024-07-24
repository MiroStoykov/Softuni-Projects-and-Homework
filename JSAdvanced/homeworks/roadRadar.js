function solve(sp, area) {
    let speed = Number(sp);
    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;

    if (area === `motorway`) {
        if (speed > motorway) {
            let speeding = speed - motorway;
            speedOver(speeding, motorway)
        } else {
            console.log(`Driving ${speed} km/h in a ${motorway} zone`);
        }
    }

    if (area === `interstate`) {
        if (speed > interstate) {
            let speeding = speed - interstate;
            speedOver(speeding, interstate)
        } else {
            console.log(`Driving ${speed} km/h in a ${interstate} zone`);
        }
    }

    if (area === `city`) {
        if (speed > city) {
            let speeding = speed - city;
            speedOver(speeding, city)
        } else {
            console.log(`Driving ${speed} km/h in a ${city} zone`);
        }
    }

    if (area === `residential`) {
        if (speed > residential) {
            let speeding = speed - residential;
            speedOver(speeding, residential)
        } else {
            console.log(`Driving ${speed} km/h in a ${residential} zone`);
        }
    }

    function speedOver(s, zone) {
        if (s <= 20) {
            console.log(`The speed is ${s} km/h faster than the allowed speed of ${zone} - ${`speeding`}`);
            console.log({dsa43:4,daq:12,gfd:7});
        }
        if (s > 20 && s <= 40) {
            console.log(`The speed is ${s} km/h faster than the allowed speed of ${zone} - ${`excessive speeding`
                } `);
        }
        if (s > 40) {
            console.log(`The speed is ${s} km/h faster than the allowed speed of ${zone} - ${`reckless driving`
                } `);
        }
    }

}

// solve(40, 'city');
// solve(200, 'motorway');
solve(21, `residential`);