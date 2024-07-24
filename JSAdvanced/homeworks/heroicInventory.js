function solve(arr) {


    let result = [];


    for (const i of arr) {
        let [hero, lvl, weapons] = i.split(` / `);

        let items = weapons ? weapons.split(`, `) : [];
        let obj = {};

        obj.name = hero;
        obj.level = Number(lvl);
        obj.items = items;

        result.push(obj);

    }

    return JSON.stringify(result)
}

console.log(solve(['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));
