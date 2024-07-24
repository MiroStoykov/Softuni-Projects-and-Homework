function solve(arr) {
    let num = 1;
    let result = [];

    for (const i of arr) {
        if (i === `add`) {
            result.push(num);
            num++;
        } else {
            result.pop();
            num++;
        }
    }
    if (result.length == 0) {
        console.log(`Empty`);
        return;
    }
    for (const i of result) {
        console.log(i);
    }
}

solve(['add', 'add', 'remove', 'add', 'add']);