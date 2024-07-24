function solve(arr) {

    let row = 0;
    let col = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            col += arr[j][i];
        }
        row = arr[i].reduce((a, b) => a + b, 0);
        result.push(col);
        result.push(row);
        col = 0;
    }

    let allEqual = result.every(v => v === result[0]);

    console.log(allEqual);
}

solve([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]);
solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);