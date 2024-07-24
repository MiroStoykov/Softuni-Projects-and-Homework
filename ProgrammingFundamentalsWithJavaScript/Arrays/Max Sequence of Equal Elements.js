function solve(arr) {
    let result = [];
    let counter = [];


    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == arr[i - 1]) {
            counter.push(arr[i]);
            if (arr[i-1] != arr[i - 2]) {
                counter.push(arr[i - 1]);
            }
        }

        if (counter.length >= result.length) {
            result = counter;
            if ((arr[i-1] != arr[i - 2])) {
                counter = [];
            }
        }

        if (arr[i - 1] != arr[i - 2]) {
            counter=[];
        }

    }

    console.log(result.join(` `));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])