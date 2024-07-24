function solve(arr) {
    let num = Number.NEGATIVE_INFINITY;

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]) { num = arr[i]; result.push(num); }
    }

    return result;
}

solve(["John",

    "Bob",

    "Christina",

    "Ema"]);