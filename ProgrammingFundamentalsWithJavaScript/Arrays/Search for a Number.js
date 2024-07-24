function solve(arr1, arr2) {

    let size = arr1.slice(0, arr2[0]);
    size.splice(0, arr2[1]);
    let num = arr2[2];
    let counter = 0;

    for (let i = 0; i < size.length; i++) {
        if (size[i] == num) {
            counter++;
        }
    }

    console.log(`Number ${num} occurs ${counter} times.`);
}

solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)