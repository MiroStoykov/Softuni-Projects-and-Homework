function solve(str) {

    let regex1 = /@(?<first>[A-Za-z]{3,})@@(?<second>[A-Za-z]{3,})@/g;
    let regex2 = /#(?<first>[A-Za-z]{3,})##(?<second>[A-Za-z]{3,})#/g;

    let kliomba;
    let hashTag;

    let result = [];

    while ((kliomba = regex1.exec(str))) {
        let index = str.indexOf(kliomba[0]);
        let arr = [kliomba[0], kliomba[1], kliomba[2], index];
        result.push(arr);
    }

    while ((hashTag = regex2.exec(str))) {
        let index = str.indexOf(hashTag[0]);
        let arr = [hashTag[0], hashTag[1], hashTag[2], index];
        result.push(arr);
    }

    result.sort((a, b) => a[3] - b[3]);


    let mirrorWords = [];

    result.forEach((a) => {
        let current = a[2].split(``).reverse().join(``);
        if (a[1] === current) {
            let arr = [a[1], a[2]]
            mirrorWords.push(arr);
        }
    });
    if (result.length == 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${result.length} word pairs found!`);
    }

    if (mirrorWords.length == 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        let resultStr = [];
        mirrorWords.forEach(a => resultStr.push(`${a[0]} <=> ${a[1]}`));
        console.log(resultStr.join(`, `));
    }
}

solve(
    `@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r`
);
