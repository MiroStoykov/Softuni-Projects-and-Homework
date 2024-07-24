function solve(n) {

    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(n);
    }

    for (let i = 0; i < n; i++) {
        console.log(result.join(` `));
    }

}
solve(7);