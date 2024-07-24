function solve(arr) {

    let count = arr.shift();

    let heroes = [];

    for (let i = 0; i < count; i++) {
        let hero = arr.shift().split(` `);
        if (Number(hero[1]) > 100) hero[1] = 100;
        if (Number(hero[2]) > 200) hero[2] = 200;
        heroes.push(hero);
    }

    for (const i of arr) {
        if (i == `End`) break;
        let current = i.split(` - `);
        let name = current[1];

        if (current[0] == `CastSpell`) {
            let manaCost = Number(current[2]);
            let spellName = current[3];
            for (const j of heroes) {
                if (name === j[0]) {
                    if (manaCost <= Number(j[2])) {
                        j[2] = Number(j[2]) - manaCost;
                        console.log(`${name} has successfully cast ${spellName} and now has ${j[2]} MP!`);
                    } else {
                        console.log(`${name} does not have enough MP to cast ${spellName}!`);
                    }
                }
            }
        }
        if (current[0] == `TakeDamage`) {
            let damage = Number(current[2]);
            let attacker = current[3];
            for (const j of heroes) {
                if (name == j[0]) {
                    if (damage < Number(j[1])) {
                        j[1] = Number(j[1]) - damage;
                        console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${j[1]} HP left!`);
                    } else {
                        heroes.splice(heroes.indexOf(j), 1);
                        console.log(`${name} has been killed by ${attacker}!`);
                    }
                }
            }
        }
        if (current[0] == `Recharge`) {
            let amount = Number(current[2]);
            for (const j of heroes) {
                if (name == j[0]) {
                    let mana = Number(j[2]);
                    j[2] = Number(j[2]) + amount;
                    if (j[2] > 200) j[2] = 200;
                    console.log(`${name} recharged for ${j[2] - mana} MP!`);
                }
            }
        }
        if (current[0] == `Heal`) {
            let amount = Number(current[2]);
            for (const j of heroes) {
                if (name == j[0]) {
                    let health = Number(j[1]);
                    j[1] = Number(j[1]) + amount;
                    if (j[1] > 100) j[1] = 100;
                    console.log(`${name} healed for ${j[1] - health} HP!`);
                }
            }
        }
    }

    for (const i of heroes) {
        console.log(i[0]);
        console.log(`  HP: ${i[1]}`);
        console.log(`  MP: ${i[2]}`);
    }
}

solve([
    2,
    `Solmyr 85 120`,
    `Kyrre 99 50`,
    `Heal - Solmyr - 10`,
    `Recharge - Solmyr - 50`,
    `TakeDamage - Kyrre - 66 - Orc`,
    `CastSpell - Kyrre - 15 - ViewEarth`,
    `End`]
);
