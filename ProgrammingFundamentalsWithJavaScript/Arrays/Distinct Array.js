function solve(arr) {

    let result = [];


    for (let i = 0; i < arr.length; i++) {
        if (result.includes(arr[i])) {
            continue;
        } else (result.push(arr[i]))
    }

    console.log(result.join(` `));
}

solve([20, 8, 12, 13, 4, 4, 8, 5])