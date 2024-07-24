function game(input) {

    let health = 100;
    let bitcoins = 0;
    let room = 0;

    let inputArr = input.split(/[ |]+/);


    for (let i = 0; i <= inputArr.length; i += 2) {
        if (i == inputArr.length) {
            break;
        }
        let roomType = inputArr[i];
        let roomValue = Number(inputArr[i + 1]);
        room++;

        if (roomType != `potion` && roomType != `chest`) {

            health -= roomValue;

            if (health > 0) {
                console.log(`You slayed ${roomType}.`);
            } else {
                console.log(`You died! Killed by ${roomType}.`)
                console.log(`Best room: ${room}`);
                return;
            }

        }
        if (roomType == `potion`) {
            let currentHealth = health;
            health += roomValue;
            if (health > 100) {
                health = 100;
            }
            console.log(`You healed for ${health - currentHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
        if (roomType == `chest`) {

            bitcoins += roomValue;
            console.log(`You found ${roomValue} bitcoins.`);

        }

    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}

game(`cat 10|potion 30|orc 10|chest 10|snake 25|chest 110`);