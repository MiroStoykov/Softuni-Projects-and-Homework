function solve(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let second = arr[j];
            if (first + second == num) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}

solve([1, 2, 3, 4, 5, 6], 6)