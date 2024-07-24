function solve(input) {
    let towns = [];
    let counter = false;
    for (const i of input) {
        if (!counter) {
            if (i == `Sail`) { counter = true; continue; }
            let current = i.split(`||`);
            let counter2 = true;
            towns.forEach(a => {
                if (a.town == current[0]) {
                    a.gold += Number(current[2]);
                    a.people += Number(current[1]);
                    counter2 = false;
                }
            })
            if (counter2) {
                let obj = { town: current[0], people: Number(current[1]), gold: Number(current[2]) };
                towns.push(obj);
            }
        } else {
            if (i == `End`) break;

            let current = i.split(`=>`);

            if (current[0] == `Plunder`) {
                for (const j of towns) {
                    if (j.town == current[1]) {
                        j.gold -= Number(current[3]);
                        j.people -= Number(current[2]);
                        console.log(`${j.town} plundered! ${current[3]} gold stolen, ${current[2]} citizens killed.`);
                        if (j.gold <= 0 || j.people <= 0) {
                            // console.log(`${j.town} plundered! ${(j.gold - Number(current[3])) > 0 ? current[3] : j.gold} gold stolen,${(j.people - Number(current[2])) > 0 ? current[2] : j.people} citizens killed.`);
                            console.log(`${j.town} has been wiped off the map!`);
                            towns.splice(towns.indexOf(j), 1);
                        }
                    }
                }
            }

            if (current[0] == `Prosper`) {
                if (current[2] < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    towns.forEach(a => {
                        if (a.town == current[1]) {
                            a.gold += Number(current[2]);
                            console.log(`${current[2]} gold added to the city treasury. ${a.town} now has ${a.gold} gold.`);
                        }
                    })
                }
            }
        }
    }


    if (towns.length > 0) {
        console.log(`Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`);
        towns.forEach(a => console.log(`${a.town} -> Population: ${a.people} citizens, Gold: ${a.gold} kg`))
    } else { console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`); }

}

solve(["Nassau||95000||1000",

    "San Juan||930000||1250",

    "Campeche||270000||690",

    "Port Royal||320000||1000",

    "Port Royal||100000||2000",

    "Sail",

    "Prosper=>Port Royal=>-200",

    "Plunder=>Nassau=>94000=>750",

    "Plunder=>Nassau=>1000=>150",

    "Plunder=>Campeche=>150000=>690",

    "End"])