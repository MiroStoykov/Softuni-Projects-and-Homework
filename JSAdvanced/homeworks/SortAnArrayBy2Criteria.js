function solve(arr) {

    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));


    for (const iterator of arr) {
        console.log(iterator);
    }
}

solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);