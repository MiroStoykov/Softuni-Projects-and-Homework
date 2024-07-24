function deckOfCards(input) {

    let cards = input.shift().split(`, `);
    let num = Number(input.shift());

    for (let i = 0; i < num; i++) {

        let command = input[i].split(`, `);

        if (command[0] == `Add`) {
            let card = command[1];
            if (!cards.includes(card)) {
                console.log(`Card successfully added`);
                cards.push(card);
            } else (
                console.log("Card is already in the deck")
            )
        }

        if (command[0] == `Remove`) {
            let card = command[1];
            if (cards.includes(card)) {
                console.log("Card successfully removed");
                let index = cards.indexOf(card);
                cards.splice(index, 1);
            } else (
                console.log("Card not found")
            )
        }

        if (command[0] == `Remove At`) {
            let index = Number(command[1]);
            if (index >= 0 && index < cards.length) {
                console.log("Card successfully removed");
                cards.splice(index, 1);
            } else (
                console.log("Index out of range")
            )
        }

        if (command[0] == `Insert`) {

            let index = Number(command[1]);
            let card = command[2];

            if (index >= 0 && index < cards.length && !cards.includes(card)) {
                cards.splice(index, 0, card);
                console.log("Card successfully added");
                continue;
            }

            if (index < 0 || index >= cards.length) {
                console.log("Index out of range");
                continue;
            }
            if (cards.includes(card)) {
                console.log("Card is already added");
            }
        }
    }

    console.log(cards.join(`, `));
}





deckOfCards((["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"]))