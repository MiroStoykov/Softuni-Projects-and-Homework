function solve(arr) {

    let towns = {};

    for (let town of arr) {

        let current = town.split(` | `)

        towns.town = current[0];
        towns.latitude = Number(current[1]).toFixed(2);
        towns.longitude = Number(current[2]).toFixed(2);

        console.log(towns);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)