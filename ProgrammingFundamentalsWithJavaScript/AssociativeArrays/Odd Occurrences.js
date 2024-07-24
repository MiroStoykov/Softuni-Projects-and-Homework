function solve(input) {

    let words = input.split(` `).map(a => a.toLowerCase());

    let result = {};

    result = words.reduce((a, b, c) => {
        if (!a.hasOwnProperty(b)) {
            a[b] = 1;
        } else (a[b]++)

        return a;
    }, {})

    filteredResult = Object.entries(result)
        .filter(a => a[1] % 2 == 1)
        .map(a => a = a[0]);

    let filteredWords = new Set(words);
    let counter = 0;
    let lastResult = [];

    for (let i of filteredWords) {

        if (filteredResult.includes(i)) {
            lastResult.push(i);
            counter++;
        }
        if (counter > filteredResult.lenght) {
            break;
        }

    }

    console.log(lastResult.join(` `));

}



solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

