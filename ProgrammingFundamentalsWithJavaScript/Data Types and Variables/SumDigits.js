function solve(params) {
    console.log(String(params).split(``).map(Number).reduce((a, b) => a + b));
}

solve(245678)