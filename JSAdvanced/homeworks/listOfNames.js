function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b));

    let num = 1;

    for (const iterator of arr) {
        console.log(`${num}.${iterator}`);
        num++;
    }
}

solve(["John",

    "Bob",

    "Christina",

    "Ema"]);