function solve(arr) {
    let biggest = arr.sort((a, b) => a - b);

    let result = [];

    let counter = arr.length;

    for (let i = 0; i < counter; i++) {

        if (i % 2 == 0) {
            result.push(biggest.pop());
            counter++;
        } else (result.push(biggest.shift()))

    }

    console.log(result.join(` `));
}

solve([34, 2, 32, 45, 690, 6, 32,
    7, 19, 47]
)