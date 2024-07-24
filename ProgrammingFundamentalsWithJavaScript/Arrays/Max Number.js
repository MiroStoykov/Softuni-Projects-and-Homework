function solve(arr) {
    let result = [];


    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];
        let numsRight = arr.slice(i + 1, arr.length)
        let counter = true;

        for (let j = 0; j < numsRight.length; j++) {
            if (current < numsRight[j]) {
                counter = false;
            }
            if (current == numsRight[j]) {
                counter = false;
            }

        }

        if (counter == true) {
            result.push(current)
        }

    }

    console.log(result.join(` `));
}
solve([41, 41, 34, 20]
)