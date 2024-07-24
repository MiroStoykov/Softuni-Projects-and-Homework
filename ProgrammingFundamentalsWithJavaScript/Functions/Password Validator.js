function solve(input) {

    let nums = 0;

    let digits = true;
    let length = true;
    let digid = 0;
    let counter = true;

    let fknNumsAndFknDigits = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];


    if (input.length < 6 || input.length > 10) {
        length = false;
    }

    for (let i = 0; i < input.length; i++) {

        let char = input[i].charCodeAt();

        if (char > 47 && char < 58) {
            digid++;
        }

        if (!fknNumsAndFknDigits.includes(input[i])) {
            counter = false;
        }

    }

    if (digid < 2) {
        digits = false;
    }

    if (digits && counter && length) {
        console.log(`Password is valid`);
    }

    if (!length) {
        console.log(`Password must be between 6 and 10 characters`);
    }

    if (!counter) {
        console.log(`Password must consist only of letters and digits`);
    }

    if (!digits) {
        console.log(`Password must have at least 2 digits`);
    }

}
solve('Pa$s$s');