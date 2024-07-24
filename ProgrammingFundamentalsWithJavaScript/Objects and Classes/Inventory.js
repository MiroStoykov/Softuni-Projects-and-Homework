function solve(arr) {

    let result = [];

    for (const item of arr) {
        let obj = {};
        let current = item.split(` / `);
        obj.name = current[0];
        obj.lvl = current[1];
        obj.items = current[2];
        result.push(obj);
    }

    let heroes = result.sort((a, b) => a.lvl - b.lvl);

    let movie = heroes.find(a => a.name = `Isacc`);
    console.log(movie);

    for (const i of heroes) {
        console.log(`Hero: ${i.name}`);
        console.log(`level => ${i.lvl}`);
        console.log(`items => ${i.items}`);
    }

}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]


)