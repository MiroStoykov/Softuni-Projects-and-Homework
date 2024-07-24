function solve(arr) {

    let players = {};

    arr.forEach(a => {
        let [player, cards] = a.split(`: `);
        let cardsArr = new Set(cards.split(`, `));
        if (!(player in players)) {
            players[player] = cardsArr;
        } else if (player in players) {
            for (const i of cardsArr) {
                players[player].add(i);
            }
        }
    })

    let entries = Object.entries(players);

    let result = {};

    for (const [player, cardsSet] of entries) {

        let score = 0;

        let cards = Array.from(cardsSet.values());

        for (const i of cards) {
            let multiplier = 0;

            let card = i.split(``);

            switch (card[card.length - 1]) {
                case `S`:
                    multiplier = 4;
                    break;
                case `H`:
                    multiplier = 3;
                    break;
                case `D`:
                    multiplier = 2;
                    break;
                case `C`:
                    multiplier = 1;
                    break;
            }

            if (card.length > 2) {
                score += Number(card[0] + card[1]) * multiplier;
            } else if (!isNaN(card[0])) {
                score += Number(card[0] * multiplier)
            } else if (isNaN(card[0])) {
                if (card[0] == `J`) {
                    score += 11 * multiplier;
                }
                if (card[0] == `Q`) {
                    score += 12 * multiplier;
                }
                if (card[0] == `K`) {
                    score += 13 * multiplier;
                }
                if (card[0] == `A`) {
                    score += 14 * multiplier;
                }
            }
        }
        result[player] = score;
    }
    Object.entries(result).map(a => console.log(`${a[0]}: ${a[1]}`));
}

solve(
    [
        'John: 2C, 4H, 9H, AS, QS',
        'Slav: 3H, 10S, JC, KD, 5S, 10S',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Slav: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'John: JD, JD, JD, JD'
    ]
)


