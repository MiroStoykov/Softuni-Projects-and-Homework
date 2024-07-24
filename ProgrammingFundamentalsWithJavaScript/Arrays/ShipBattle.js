function shipBattle(input) {

    let pirate = input.shift().split(`>`).map(Number);
    let warShip = input.shift().split(`>`).map(Number);
    let maxHp = Number(input.shift());
    let criticalHp = maxHp * 0.2;

    for (let current of input) {
        let action = current.split(` `);
        if (action[0] == `Retire`) {
            break;
        } else if (action[0] == `Fire`) {
            let index = Number(action[1]);
            let damage = Number(action[2]);
            if (index < 0 || index >= warShip.length) {
                continue;
            }
            warShip[index] -= damage;
            if (warShip[index] <= 0) {
                console.log("You won! The enemy ship has sunken.");
                return;
            }
        } else if (action[0] == `Defend`) {

            let index1 = Number(action[1])
            let index2 = Number(action[2]);
            let damage = Number(action[3]);
            if (index1 < 0 || index1 >= pirate.length || index2 < 0 || index2 >= pirate.length) {
                continue;
            }

            for (let i = index1; i <= index2; i++) {
                pirate[i] -= damage;
                if (pirate[i] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    return;
                }
            }

        } else if (action[0] == `Repair`) {

            let index = Number(action[1]);
            let hp = Number(action[2]);
            if (index < 0 || index >= pirate.length) {
                continue;
            }
            pirate[index] += hp;
            if (pirate[index] > maxHp) {
                pirate[index] = maxHp;
            }

        } else if (action[0] == `Status`) {
            let damagedSections = pirate.filter(x => x < criticalHp);
            console.log(`${damagedSections.length} sections need repair.`);
        }
    }
    // console.log(`Pirate ship status: ${pirate.reduce((a, b) => a + b, 0)}`);
    // console.log(`Warship status: ${warShip.reduce((a, b) => a + b, 0)}`);

    let pirateShipStatus = 0;
    let warShipStatus = 0;
    for (const i of pirate) {
        pirateShipStatus += i;
    }
    for (const i of warShip) {
        warShipStatus += i;
    }

    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`Warship status: ${warShipStatus}`);
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
