function solve(str) {

    let splitedStr = str.split(` `);

    let result = splitedStr.filter(a => a[0] == `#` && a.length > 1);

    result.forEach(a => {
        let word = a.slice(1, a.length);
        let counter = true;
        for (i = 0; i < word.length; i++) {
            if (!isNaN(word[i])) {
                counter = false;
            }
        };
        if (counter) {
            console.log(word);
        }
    });
}

solve('The symbol # is known #variously in English - speaking #regions as the #number sign'
);