function solve(input) {

    let result = [];

    for (const i of input) {
        if (i == `Stop`) break;
        let current = i.split(`-`);

        let name = current[1];
        let meal = current[2];

        if (current[0] == `Like`) {
            let arr = [meal];
            let obj = {};
            obj.name = name;
            obj.meals = arr;
            obj.disliked = 0;
            let counter = false;
            for (const j of result) {
                if (j.name == name) {
                    if (!j.meals.includes(meal)) {
                        j.meals.push(meal);
                    }
                    counter = true;
                }
            }
            if (!counter) {
                result.push(obj)
            }
        } else if (current[0] == `Dislike`) {
            let counter = false;
            if (result.length > 0) {
                for (const j of result) {
                    if (j.name == name) {
                        counter = true;
                    }
                }
            }
            if (!counter) {
                console.log(`${name} is not at the party.`);
                continue;
            }

            if (counter) {
                for (const j of result) {
                    if (j.name == name) {
                        if (j.meals.includes(meal)) {
                            let index = j.meals.indexOf(meal);
                            j.meals.splice(index, 1);
                            j.disliked++;
                            console.log(`${name} doesn't like the ${meal}.`);
                        } else (
                            console.log(`${name} doesn't have the ${meal} in his/her collection.`)
                        )
                    }
                }
            }

        }

    }

    let sum = 0;
    for (const i of result) {
        console.log(`${i.name}: ${i.meals.join(`, `)}`);
        sum += i.disliked;
    }
    console.log(`Unliked meals: ${sum}`);
}

solve(["Like-Krisi-shrimps",

    "Dislike-Vili-carp",

    "Dislike-Krisi-shrimps",
    "Dislike-Krisi-shrimps",

    "Stop"])
