function solve(arr) {

    let list = [];

    for (const i of arr) {

        let current = i.split(` `);

        if (current.length == 3) {
            if (list.includes(current[0])) {
                console.log(`${current[0]} is already in the list!`);
                continue;
            } else (list.push(current[0]))
        } else if (current.length == 4) {
            if (list.includes(current[0])) {
                let index = list.indexOf(current[0])
                list.splice(index, 1);
            } else (console.log(`${current[0]} is not in the list!`))
        }
    }

    console.log(list.join(`\n`));
}

solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)