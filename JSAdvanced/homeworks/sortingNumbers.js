function solve(arr) {

    arr.sort((a, b) => a - b);

    let reversedArr = arr.slice().reverse();

    let result = [];

    let counter1 = 0;
    let counter2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            result.push(arr[counter1]);
            counter1++;
        } else {
            result.push(reversedArr[counter2]);
            counter2++;
        }
    }

    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);