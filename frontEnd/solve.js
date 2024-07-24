function solve(input) {

    let message = input.shift();

    for (const item of input) {

        const command = item.split(`?`);

        if (command[0] == `Buy`) {
            console.log(`The cryptocurrency is: ${message}`);
            return;
        }

        if (command[0] == `TakeEven`) {
            let buffer = ``;
            for (let i = 0; i < message.length; i++) {
                if (i % 2 == 0) {
                    buffer += message[i];
                }
            }
            message = buffer;
            console.log(message);
        }

        if (command[0] == `ChangeAll`) {
            const substring = command[1];
            const replacement = command[2];
            let buffer = ``;
            for (let i = 0; i < message.length; i++) {
                let current = message[i];
                if (current == substring) {
                    current = replacement;
                }
                buffer += current;
            }
            message = buffer;
            console.log(message);
        }

        if (command[0] == `Reverse`) {
            const substring = command[1];
            if (message.includes(substring)) {
                message = message.replace(substring, ``);
                message += substring.split(``).reverse().join(``);
                console.log(message);
            } else {
                console.log(`error`);
            }
        }
    }
}

solve(([`z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs`,
    `TakeEven`,
    `Reverse?!nzahc`,
    `ChangeAll?m?g`,
    `Reverse?adshk`,
    `ChangeAll?z?i`,
    `Buy`]))