function shipBattle(input) {

    let counter = 3;
    if (input.length < 3) {
        return;
    }

    let pirateShipSectionsStr = (input[0].split(`>`))
    let warShipSectionsStr = (input[1].split(`>`));
    let maxHealth = Number(input[2]);
    let minHealth = maxHealth * 0.2;
    let pirateShipSections = pirateShipSectionsStr.map(x => Number(x));
    let warShipSections = warShipSectionsStr.map(x => Number(x));


    while (input[counter] != `Retire`) {

        let action = input[counter].split(` `);

        if (action[0] == `Fire` && action.length >= 3) {
            let section = Number(action[1]);
            let damage = Number(action[2]);
            if (section >= 0 && section <= warShipSections.length) {
                warShipSections[section] -= damage;
                if (warShipSections[section] - damage <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (action[0] == `Defend` && action.length >= 4) {
            let section1 = Number(action[1]);
            let section2 = Number(action[2]);
            let damage = Number(action[3]);

            if (section1 >= 0 && section1 < pirateShipSections.length && section2 >= 0 && section2 < pirateShipSections.length) {

                for (let i = section1; i <= section2; i++) {
                    pirateShipSections[i] -= damage;
                    if (pirateShipSections[i] - damage <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if (action[0] == `Repair`) {

            let section = Number(action[1]);
            let repair = Number(action[2]);

            if (section > 0 && section < pirateShipSections.length) {
                pirateShipSections[section] += repair;
            }
            if (pirateShipSections[section] > maxHealth) {
                pirateShipSections[section] = maxHealth;
            }
        } else if (action[0] == `Status`) {
            let sectionsNeedingRepair = 0;

            for (let i = 0; i < pirateShipSections.length; i++) {
                if (pirateShipSections[i] < minHealth) {
                    sectionsNeedingRepair++;
                }
            }
            console.log(`${sectionsNeedingRepair} sections need repair.`);
        }
        counter++;
    }

    console.log(`Pirate ship status: ${pirateShipSections.reduce((a, b) => a + b, 0)}`);
    console.log(`Warship status: ${warShipSections.reduce((a, b) => a + b, 0)}`);

}

shipBattle([`12 > 13 > 11 > 20 > 66`,
    `12 > 22 > 33 > 44 > 55 > 32 > 18`,
    `70`,
    `Fire 2 11`,
    `Fire 8 100`,
    `Defend 3 6 11`,
    `Defend 0 3 5`,
    `Repair 1 33`,
    `Status`,
    `Retire`]);

shipBattle(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
