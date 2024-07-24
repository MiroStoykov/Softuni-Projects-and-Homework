function solve(input) {

    let regex = /!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]/g;

    let num = Number(input.shift());

    for (let i = 0; i < num; i++) {
        let current = input.shift();
        let counter = current.match(regex);
        if (counter) {
            let [str, command, message] = regex.exec(current);

            let arr = [];

            for (j = 0; j < message.length; j++) {
                arr.push(message.charCodeAt(j));
            }

            console.log(`${command}: ${arr.join(` `)}`);
        } else {
            console.log(`The message is invalid`);
        }
    }
}

solve(["3",

    "go:[outside]",

    "!drive!:YourCarToACarWash",

    "!Watch!:[LordofTheRings]"])