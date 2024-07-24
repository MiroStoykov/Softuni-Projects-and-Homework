function solve(arr, arr2) {

    let bomb = arr2[0];
    let power = arr2[1];


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == bomb) {
            let right = power * 2 + 1;
            let left = i - power;

            if (left < 0) {
                left = 0;
            }
            if (left + right > arr.length - 1) {
                right = arr.length - left;
            }
            arr.splice(left, right);
            i = i - power - 1;
        }
    }
    console.log(arr.reduce((a, b) => a + b));
}

solve([1, 1, 2, 1, 1, 1,
    2, 1, 1, 1],
    [2, 1]
)
