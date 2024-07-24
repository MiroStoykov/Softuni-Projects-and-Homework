function solve(input) {

    let gladiators = [];

    for (const i of input) {
        if (i == 'Ave Cesar') break;

        let current1 = i.split(` -> `);

        let current2 = i.split(` vs `);

        if (current1.length == 3) {
            let name = current1[0];
            let technique = current1[1];
            let skill = Number(current1[2]);
            let counter1 = false;

            for (const j of gladiators) {
                if (j.name == name) {
                    let counter = false;
                    for (const e of j.techniques) {
                        if (e[0] == technique) {
                            if (e[1] < skill) {
                                e[1] = skill;
                                j.totalSkill += (skill - e[1]);
                            }
                            counter = true;
                        }
                    }
                    if (!counter) {
                        let arr = [technique, skill];
                        j.techniques.push(arr);
                        j.totalSkill += skill;
                    }
                    counter1 = true;
                }
            }
            if (!counter1) {
                let obj = {};
                obj.name = name;
                obj.techniques = [];
                let arr = [technique, skill];
                obj.totalSkill = skill;
                obj.techniques.push(arr);
                gladiators.push(obj);
            }
        }

        if (current2.length == 2) {
            let firstGlad = [];
            let secondGlad = [];
            for (const j of gladiators) {
                if (j.name == current2[0]) {
                    let index = gladiators.indexOf(j);
                    firstGlad.push(j);
                    firstGlad.push(index);
                }
                if (j.name == current2[1]) {
                    let index = gladiators.indexOf(j);
                    secondGlad.push(j);
                    secondGlad.push(index);
                }
            }

            if (secondGlad.length == 2 && firstGlad.length == 2) {
                for (const j of firstGlad[0].techniques) {
                    for (const a of secondGlad[0].techniques) {
                        if (j[0] == a[0]) {
                            if (j[1] > a[1]) {
                                gladiators.splice(secondGlad[1], 1);
                            } else {
                                gladiators.splice(firstGlad[1], 1);
                            }
                        }
                    }
                }
            }
        }
    }


    gladiators.sort((a, b) => Number(b.totalSkill) - Number(a.totalSkill) || a.name.localeCompare(b.name));

    gladiators.forEach(a => a.techniques.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));

    gladiators.forEach(a => {
        console.log(`${a.name}: ${a.totalSkill} skill`);
        a.techniques.forEach(b => {
            console.log(`- ${b[0]} <!> ${b[1]}`);
        })
    })
}

solve(['Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar'])
