function solve(arr, n) {

    for (let i = 0; i < n; i++) {
        let current = arr.pop();
        arr.unshift(current);
    }

    console.log(arr.join(` `));
}

solve(['1',

    '2',

    '3',

    '4'],

    2);
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);