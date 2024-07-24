function solve(input) {

    let heroCount = input.shift();
    let heroes = [];

    for (let i = 0; i < heroCount; i++) {
        let hero = input.shift().split(` `);
        let obj = {
            name: hero[0],
            hp: Number(hero[1]),
            bullets: Number(hero[2])
        }
        heroes.push(obj);
    }

    for (const i of input) {
        if (i == "Ride Off Into Sunset") {
            for (const i of heroes) {
                if (i.hp > 0) {
                    console.log(i.name);
                    console.log(` HP: ${i.hp}`);
                    console.log(` Bullets: ${i.bullets}`);
                }
            }
            break;
        }

        let current = i.split(` - `);

        for (const e of heroes) {
            if (current[1] == e.name && e.hp > 0) {
                if (current[0] == "FireShot") {
                    if (e.bullets > 0) {
                        e.bullets -= 1;
                        console.log(`${e.name} has successfully hit ${current[2]} and now has ${e.bullets} bullets!`);
                    } else {
                        console.log(`${e.name} doesn't have enough bullets to shoot at ${current[2]}!`);
                    }
                }

                if (current[0] == `TakeHit`) {
                    if (e.hp > current[2]) {
                        e.hp -= current[2];
                        console.log(`${e.name} took a hit for ${current[2]} HP from ${current[3]} and now has ${e.hp} HP!`);
                    } else {
                        console.log(`${e.name} was gunned down by ${current[3]}!`);
                        e.hp = 0;
                    }
                }

                if (current[0] == `Reload`) {
                    if (e.bullets < 6) {
                        console.log(`${e.name} reloaded ${6 - e.bullets} bullets!`);
                        e.bullets = 6;
                    } else {
                        console.log(`${e.name}'s pistol is fully loaded!`);
                    }
                }

                if (current[0] == `PatchUp`) {
                    if (e.hp < 100) {
                        if (Number(current[2]) + e.hp > 100) {
                            current[2] = 100 - e.hp;
                        }
                        console.log(`${e.name} patched up and recovered ${current[2]} HP!`);
                        e.hp += Number(current[2]);
                    } else {
                        console.log(`${e.name} is in full health!`);
                    }
                }

            }
        }
    }
}




solve((["2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 80 - Bandit",
    "Reload - Walt",
    "PatchUp - Gus - 20",
    "Ride Off Into Sunset",
])
)