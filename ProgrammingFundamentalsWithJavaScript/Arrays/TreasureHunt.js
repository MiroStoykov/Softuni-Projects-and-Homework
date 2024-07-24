function treasureHunt(input) {
    if (input.length == 0) {
        console.log(`Failed treasure hunt.`);
    }
    let chest = input.shift().split(`|`);

    if (input.length > 0) {
        for (let i of input) {

            let actions = i.split(` `);
            let action = actions.shift();

            if (action == "Yohoho!") {
                break;
            } else if (action == `Loot`) {
                for (let j of actions) {
                    if (!chest.includes(j)) {
                        chest.unshift(j);
                    }
                }
            } else if (action == `Drop`) {
                for (let i of actions) {
                    let index = Number(i);
                    if (index >= 0 || index < chest.length) {
                        let item = chest.splice(index, 1);
                        chest.push(item[0]);
                    }
                }
            } else if (action == `Steal`) {
                for (let i of actions) {
                    let stolenItems = [];
                    let count = Number(i);
                    if (count > chest.length) {
                        count = chest.length;
                    }
                    if (count < 0) {
                        continue;
                    }
                    for (let j = 0; j < count; j++) {
                        stolenItems.push(chest.pop());
                    }
                    let stolenItemsReversed = stolenItems.reverse();
                    console.log(stolenItemsReversed.join(`, `));
                }
            }


        }
    }

    let result = 0;

    for (const i of chest) {
        result += i.length;
    }
    if (result > 0) {
        console.log(`Average treasure gain: ${(result / chest.length).toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }
}




treasureHunt((["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]))