function solve(arr) {
    let message = arr.shift().split(``);
    for (const i of arr) {
        if (i === `Decode`) break;
        let current = i.split(`|`);
        let command = current[0];
        if (command == `ChangeAll`) {
            for (let j = 0; j < message.length; j++) {
                if (message[j] == current[1]) {
                    message[j] = current[2];
                }
            }
        }
        if (command == `Insert`) {
            message.splice(Number(current[1]) , 0, current[2]);
            message = message.join(``).split(``);
        }
        if (command == `Move`) {
            let moved = message.splice(0, Number(current[1]));
            moved.forEach(a => message.push(a));
        }
    }
    console.log(`The decrypted message is: ${message.join(``)}`);
}

solve(['zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'])
