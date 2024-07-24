function solve(n) {
    let result = [];

    for (let i = 1; i <= 10; i++) {
        if (i <= n / 10) {
            result.push(`%`);
        } else (result.push(`.`))
    }
    if (n < 100) {
        console.log(`${n}% [${result.join(``)}]`);
        console.log(`Still loading...`);
    } else (console.log(`100% Complete!`))
}
solve(50);

