function solve(str) {

    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
            result.push(i);
        }
    }

    result.push(str.length + 1);

    let lastResult = [];

    for (let i = 0; i < result.length - 1; i++) {
        lastResult.push(str.slice(result[i], result[i + 1]));
    }

    console.log(lastResult.join(`, `));
}

solve(`SplitMeIfYouCanHaHaYouCantOrYouCan`)