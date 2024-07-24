function solve(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(`|`);
        let counter = [];
        for (const j of current) {
            if (j != ``) {
                counter.push(j.trim());
            }
        }
        let obj = {};

        if (i > 0) {
            obj.Town = counter[0];
            obj.Latitude = Number(Number(counter[1]).toFixed(2).replace(/(\.0+|0+)$/, ''));
            obj.Longitude = Number(Number(counter[2]).toFixed(2).replace(/(\.0+|0+)$/, ''));
            result.push(obj);
        }
    }

    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])
solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])