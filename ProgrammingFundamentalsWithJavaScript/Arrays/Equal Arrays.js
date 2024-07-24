function solve(arr1, arr2) {

    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        let first = Number(arr1[i]);
        let second = Number(arr2[i]);
        if (first == second) {
            sum += first;
        }
        if (first != second) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);

}