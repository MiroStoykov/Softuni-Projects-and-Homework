function solve(arr) {

    let spell = arr.shift();

    for (const i of arr) {
        if (i == "Abracadabra") break;
        let current = i.split(` `);
        if (current[0] == `Abjuration`) {
            spell = spell.toUpperCase();
            console.log(spell);
        } else if (current[0] == `Necromancy`) {
            spell = spell.toLowerCase();
            console.log(spell);
        } else if (current[0] == `Illusion` && current.length >= 3) {
            let index = Number(current[1]);
            let letter = current[2];
            if (index >= spell.length || index < 0) {
                console.log(`The spell was too weak.`);
                continue;
            }
            let counter = spell.split(``);
            counter.splice(index, 1, letter);
            spell = counter.join(``);
            console.log(`Done!`);
        } else if (current[0] == `Divination` && current.length >= 3) {
            let firstSubStr = current[1];
            let secondSubStr = current[2];
            while (spell.includes(firstSubStr)) {
                spell = spell.replace(firstSubStr, secondSubStr);
            }
            console.log(spell);
        } else if (current[0] == `Alteration`) {
            let subStr = current[1];
            spell = spell.replace(subStr, ``);
            console.log(spell);
        } else {
            console.log(`The spell did not work!`);
        }
    }
}

solve(["SwordMaster",

    "Target Target Target",

    "Abjuration",

    "Necromancy",

    "Alteration master",

    "Abracadabra"])