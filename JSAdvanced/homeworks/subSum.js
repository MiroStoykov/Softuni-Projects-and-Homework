function solve(arr, a, b) {

    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (a < 0) { a = 0; };

    let nums = arr.slice(a, b + 1);

    let sum = nums.map(Number).reduce((a, b) => a + b, 0);


    return sum;
}

solve([10, 20, 30, 40, 50, 60], 3, 300);