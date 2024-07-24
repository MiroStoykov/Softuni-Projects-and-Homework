function solve(arr) {

    let result = {};

    for (let i = 0; i < arr.length; i += 2) {

        let resource = arr[i];
        let qnt = Number(arr[i + 1]);

        if (resource in result) {
            result[resource] += qnt;
        } else {
            result[resource] = qnt;
        }
    }
    let entries = Object.entries(result).map(a => console.log(`${a[0]} -> ${a[1]}`));
}

solve(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]

)


