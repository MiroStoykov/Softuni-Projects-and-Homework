function solve(arr, num) {
    let result = [];

    for (let i = 0; i < num; i++) {

        let current = arr.shift();
        arr.push(current);
    }
    console.log(arr.join(` `));
}
solve([51, 47, 32, 61, 21], 2
)