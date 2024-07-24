function solve(arr) {

    let sum1 = arr.reduce((a, b) => a + b);
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr[i] += i;
        } else (
            arr[i] -= i
        )
        sum2 += arr[i];
    }
    console.log(arr);
    console.log(sum1);
    console.log(sum2);
}

solve([5, 15, 23, 56, 35])