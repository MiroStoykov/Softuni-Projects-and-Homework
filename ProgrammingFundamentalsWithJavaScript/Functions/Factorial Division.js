function solve(n1, n2) {

    let sum1 = 1;
    let sum2 = 1;

    for (let i = 1; i <= n1; i++) {
        sum1 *= i;
    }
    for (let i = 1; i <= n2; i++) {
        sum2 *= i;
    }
    console.log((sum1 / sum2).toFixed(2));
}
solve(6, 2);

