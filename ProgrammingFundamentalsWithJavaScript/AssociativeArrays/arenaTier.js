function solve(input) {

    let glads = [];

    for (const i of input) {
        if (i == `Awe Cesar`) break;
        let current = i.split(` `);
        let glad = {};
        if (current.length > 3) {
            let counter = true;
            for (const i of glads) {
                if (current[0] == i.name) {
                    let entries = Object.keys(i);
                    if (entries.includes(current[2])) {
                        i[current[2]] += Number(current[4]);
                    } else {
                        i[current[2]] = Number(current[4]);
                    }
                    counter = false;
                }
            }
            if (counter) {
                glad.name = current[0];
                glad[current[2]] = Number(current[4]);
                glads.push(glad)
            }
        }
        if (current.length == 3) {
            let glad1 = [];
            let glad2 = [];
            let index1 = 0;
            let index2 = 0;
            glads.forEach(a => {
                if (a.name == current[0]) { glad1 = Object.entries(a); index1 = glads.indexOf(a) }
                if (a.name == current[2]) { glad2 = Object.entries(a); index2 = glads.indexOf(a) }
            })

            for (const j of glad1) {
                for (const a of glad2) {
                    if (j[0] == a[0] && j[0] != `name`) {
                        if (j[1] > a[1]) {
                            glads.splice(index2, 1);
                        } else {
                            glads.splice(index1, 1);
                        }
                    }
                }
            }
        }
    }

    for (const i of glads) {
        let entries = Object.entries(i);
        let totalScore = 0;
        entries.forEach(a => {
            if (a[0] != `name`) {
                totalScore += a[1];
            }
        })
        i.totalScore = totalScore;
    }
    glads.sort((a, b) => b.totalScore - a.totalScore || a.name.localeCompare(b.name));

    for (const i of glads) {
        console.log(`${i.name}: ${i.totalScore} skill`);
        let entries = Object.entries(i);
        entries.splice(0, 1);
        entries.splice(entries.length - 1, 1);
        entries.sort((a, b) => Number(b[1]) - Number(a[1]) || a[0].localeCompare(b[0]));
        entries.forEach(a => {
            if (a[0] != `name` && a[0] != `totalScore`) {
                console.log(`- ${a[0]} <!> ${a[1]}`);
            }
        })
    }
}

solve(['Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar']);