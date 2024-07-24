function solve(arr) {

    let result = {};

    arr.forEach(a => {
        let current = a.split(` -> `);
        if (!(current[0] in result)) {
            let arr1 = [current[1]];
            result[current[0]] = arr1;
        } else if (current[0] in result) {
            if (!result[current[0]].includes(current[1])) {
                result[current[0]].push(current[1]);
            }
        }
    })

    let entries = Object.entries(result);

    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const i of entries) {
        console.log(i[0]);
        for (const j of i[1]) {
            console.log(`-- ${j}`);
        }
    }
}



solve(
    ['SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]


)


