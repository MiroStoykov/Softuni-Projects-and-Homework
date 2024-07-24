function solve(input) {
    let arr = input;
    let sum = [];

    while (arr.length >= 2) {
        for (let i = 0; i < arr.length; i++) {
            if (i < arr.length - 1) {
                sum.push(arr[i] + arr[i + 1]);
            }
        }
        arr = sum;
        sum = [];

    }

    console.log(arr.join(``));

}

solve([5, 0, 4, 1, 2])