function solve(arr) {

    let password = (arr[0] + arr[1]).toLowerCase().split(``);

    let word = arr[2].toUpperCase().split(``);

    let vowels = [`a`, `e`, `u`, `o`, `i`];

    let counter = 0;

    let result = [];

    for (let i = 0; i < password.length; i++) {
        if (vowels.includes(password[i])) {
            result.push(word[counter]);
            counter++;
            if (counter > word.length - 1) {
                counter = 0;
            }
        } else {
            result.push(password[i]);
        }
    }

    console.log(`Your generated password is ${result.reverse().join(``)}`);

}

solve(
    [
        'ilovepizza',
        'ihatevegetables',
        'orange'
    ]

);
