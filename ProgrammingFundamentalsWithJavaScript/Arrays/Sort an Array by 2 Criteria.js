function solve(arr) {

    const sortByTwoCriteria = (a, b) => (a.length - b.length) || a.localeCompare(b);

    arr.sort(sortByTwoCriteria);

    console.log(arr.join(`\n`));
}

solve(['alpha',
    'beta',
    'gamma']
)