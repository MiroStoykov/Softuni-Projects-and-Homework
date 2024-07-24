function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            console.log(arr[i][0][0]);
        }
        if (i > 0 && arr[i][0][0] != arr[i - 1][0][0]) {
            console.log(arr[i][0][0]);
        }
        let current = arr[i].split(` : `);
        console.log(current[0] + `: ` + current[1]);
    }
}

solve(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10',
    'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])