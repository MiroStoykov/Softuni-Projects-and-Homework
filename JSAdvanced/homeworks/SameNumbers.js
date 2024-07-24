function solve(n) {
    let numAsStr = n.toString();

    let counter = true;

    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        if (numAsStr[i] != numAsStr[i + 1] && i < numAsStr.length - 1) {
            counter = false;
        }
        sum += Number(numAsStr[i]);
    }
    console.log(counter);
    console.log(sum);
}

solve(2222222);
solve(1234);