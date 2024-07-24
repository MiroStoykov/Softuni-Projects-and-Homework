function friendList(input) {

    let friends = input.shift().split(`, `);
    let blacklisted = 0;
    let lostNames = 0;

    for (let i of input) {

        if (i == `Report`) {
            break;
        }

        let command = i.split(` `);

        if (command[0] == `Blacklist`) {

            if (friends.includes(command[1])) {
                console.log(`${command[1]} was blacklisted.`);

                let index = friends.indexOf(command[1]);

                friends[index] = `Blacklisted`;

                blacklisted++;


            } else (
                console.log(`${command[1]} was not found.`)
            )
        }

        if (command[0] == `Error`) {

            let index = Number(command[1]);

            if (index >= 0 && index < friends.length && friends[index] != `Blacklisted` && friends[index] != `Lost`) {

                console.log(`${friends[index]} was lost due to an error.`);

                friends[index] = `Lost`;

                lostNames++;

            }

        }

        if (command[0] == `Change`) {

            let index = command[1];
            let name = command[2];

            if (index >= 0 && index < friends.length) {

                console.log(`${friends[index]} changed his username to ${name}.`);

                friends[index] = name;

            }

        }


    }

    console.log(`Blacklisted names: ${blacklisted}`);
    console.log(`Lost names: ${lostNames}`);
    console.log(friends.join(` `));
}


friendList((["Mike, John, Eddie",

    "Blacklist Mike",

    "Error 0",

    "Report"]))
