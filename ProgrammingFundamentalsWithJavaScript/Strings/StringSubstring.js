function solve(str, str1) {
    let word = str.toLowerCase();
    let sentece = str1.toLowerCase().split(` `);

    for (const i of sentece) {
        if (i == word) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}

solve('python', 'JavaScript is the best programming language')