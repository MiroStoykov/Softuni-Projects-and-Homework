function solve(input) {

    const baristasCount = Number(input.shift());
    let baristas = [];

    for (let i = 0; i < baristasCount; i++) {
        let current = input.shift().split(` `);
        let obj = {};
        obj[`name`] = current[0];
        obj[`time`] = current[1];
        obj[`coffee`] = current[2].split(`,`);
        baristas.push(obj);
    }

    input.forEach(a => {
        const current = a.split(` `);
        if (current[0] == 'Closed') return;

        if (current[0] == `Prepare`) {
            for (const e of baristas) {
                if (e.name == current[2]) {
                    let counter = false;
                    for (let i of e.coffee) {
                        if (current[6] == i && current[4] == e.time) {
                            console.log(`${e.name} has prepared a ${i} for you!`);
                            counter = true;
                        }
                    }
                    if (!counter) {
                        console.log(`${e.name} is not available to prepare a ${current[6]}.`);

                    }
                }
            }
        }
        if (current[0] == `Change`) {
            for (const e of baristas) {
                if (e.name == current[3]) {
                    e.time = current[5];
                    console.log(`${e.name} has updated his shift to: ${e.time}`);
                }
            }
        }

        if (current[0] == `Learn`) {
            for (const e of baristas) {
                if (e.name == current[2]) {
                    if (e.coffee.includes(current[4])) {
                        console.log(`${e.name} knows how to make ${current[4]}.`);
                    } else {
                        e.coffee.push(current[4]);
                        console.log(`${e.name} has learned a new coffee type: ${current[4]}.`);
                    }
                }
            }
        }
    }
    )

    for (const i of baristas) {
        console.log(`Barista: ${i.name}, Shift: ${i.time}, Drinks: ${i.coffee.join(`, `)} `);
    }
}


solve([
    4,
    `Alice day Espresso,Cappuccino`,
    `Bob night Latte,Mocha`,
    `Carol day Americano,Mocha`,
    `David night Espresso`,
    `Change Shift / Bob / day`,
    `Prepare / Carol / day / Cappuccino`,
    `Learn / Bob / Mocha`,
    `Closed`])