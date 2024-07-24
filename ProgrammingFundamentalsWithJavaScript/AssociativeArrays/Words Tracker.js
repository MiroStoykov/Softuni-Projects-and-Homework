function solve(arr) {

    let words = arr.shift().split(` `);

    let result = {};

    for (const i of words) {
        result[i] = 0;
        for (const j of arr) {
            if (i == j) {
                result[i]++;
            }
        }
    }

    

    let entries = Object.entries(result).sort(([, a], [, b]) => b - a);

    entries.forEach(key => console.log(`${key[0]} - ${key[1]}`));

}



solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]


);

