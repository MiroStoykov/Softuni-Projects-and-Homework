function solve(arr) {

    let wagonsStr = (arr.shift().split(` `));
    let wagons = wagonsStr.map(Number);
    let capacity = Number(arr.shift());


    for (const i of arr) {
        let current = i.split(` `);

        if (current[0] == `Add`) {
            wagons.push(Number(current[1]));
        } else if (current.length == 1) {
            for (j = 0; j < wagons.length; j++) {
                if (Number(current[0]) + (wagons[j]) > capacity) {
                    continue;
                }
                wagons[j] += Number(current[0]);
                break;
            }
        }
    }

    console.log(wagons.join(` `));

}

solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)