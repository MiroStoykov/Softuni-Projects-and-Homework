function solve(str1, str2) {

    let words = str1.split(`, `);

    let sentence = str2;

    for (const i of words) {
        let stars=`*`.repeat(i.length);
        sentence=sentence.replace(stars,i);
    }

    console.log(sentence);
}

solve('great, learning', 'softuni is ***** place for ******** new programming languages');