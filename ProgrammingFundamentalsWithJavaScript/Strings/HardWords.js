function solve(input) {

    let strArr = input[0].split(``);
    let words = input[1];

    let result = input[0].split(``);

    for (let j = 0; j < strArr.length; j++) {

        let firstIndex = j;
        let counter = 0;

        if (strArr[j] == `_`) {

            for (let i = j; i < strArr.length; i++) {
                if (strArr[i] != `_`) {
                    break;
                }
                counter++;
            }

            for (const word of words) {
                if (word.length == counter) {
                    for (let a = 0; a < word.length; a++) {
                        result.splice(firstIndex + a, 1, word[a]);
                    }
                }
            }
        }
        j = firstIndex + counter;
    }
    console.log(result.join(``));
}

solve(['I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened.My dad bought me a sled.Mom started a new job as a __________.My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious.I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])