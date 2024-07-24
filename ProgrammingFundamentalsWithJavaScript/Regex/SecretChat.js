function solve(arr) {

    let message = arr.shift().split(``);

    for (const i of arr) {

        if (i == `Reveal`) break;

        let current = i.split(`:|:`);

        if (current[0] == `InsertSpace`) {
            let index = Number(current[1]);
            message.splice(index, 0, ` `);
            console.log(message.join(``));
        } else if (current[0] == `Reverse`) {
            let str = message.join(``);
            let subStr = current[1];
            let index = str.indexOf(subStr);
            if (index >= 0) {
                message.splice(index, subStr.length);
                for (let j = 0; j < subStr.length; j++) {
                    message.push(subStr[subStr.length - j - 1]);
                }
                console.log(message.join(``));
            } else {
                console.log(`error`);
            }
        } else if (current[0] == `ChangeAll`) {
            let str = message.join(``);
            for (let j = 0; j < message.length; j++) {
                str = str.replace(current[1], current[2]);
            }
            message = str.split(``);
            console.log(message.join(``));
        }
    }
    console.log(`You have a new text message: ${message.join(``)}`);
}

solve(
    [
        'Hiware?uiy',
        'ChangeAll:|:i:|:o',
        'Reverse:|:?uoy',
        'Reverse:|:jd',
        'InsertSpace:|:3',
        'InsertSpace:|:7',
        'Reveal'
    ]
);
