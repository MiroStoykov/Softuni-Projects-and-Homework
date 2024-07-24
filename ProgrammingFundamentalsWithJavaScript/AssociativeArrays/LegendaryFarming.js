function solve(input) {

    let result = {};

    let resurses = input.toLowerCase().split(` `);

    let matherials = { shards: `Shadowmourne`, fragments: `Valanyr`, motes: `Dragonwrath` };


    for (let i = 0; i < resurses.length; i += 2) {
        if (resurses[i + 1] in result) {
            result[resurses[i + 1]] += Number(resurses[i]);
        } else {
            result[resurses[i + 1]] = Number(resurses[i]);
        }
        let entries = Object.entries(result);
        let counter = false;
        entries.forEach(a => {
            if (a[1] >= 250 && a[0] in matherials) {
                console.log(`${matherials[a[0]]} obtained!`);
                counter = true;
                result[a[0]] -= 250;
            }
        })
        if (counter) {
            break;
        }
    }

    let entries = Object.entries(result);

    let mainMats = { shards: 0, fragments: 0, motes: 0 };

    let secondaryMats = [];

    entries.forEach(a => {
        if (a[0] in matherials) {
            mainMats[a[0]] += a[1];
        } else {
            secondaryMats.push(a);
        }
    })

    let mainMatsEntries = Object.entries(mainMats);

    mainMatsEntries.sort((a, b) => (b[1]) - (a[1]) || a[0].localeCompare(b[0])).forEach(a => console.log(`${a[0]}: ${a[1]}`));

    secondaryMats.sort((a, b) => String(a[0]).localeCompare(String(b[0]))).forEach(a => console.log(`${a[0]}: ${a[1]}`));
}

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');


