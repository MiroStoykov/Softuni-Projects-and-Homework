function quest(input) {

    let days = Number(input.shift());
    let count = Number(input.shift());
    let energy = Number(input.shift());
    let water = Number(input.shift());
    let food = Number(input.shift());
    let counter = 1;

    let waterNeeded = water * days * count;
    let foodNeeded = food * days * count;


    for (let i of input) {

        energy -= Number(i);

        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${foodNeeded.toFixed(2)} food and ${waterNeeded.toFixed(2)} water.`);
            return;
        }

        if (counter % 2 == 0) {
            energy *= 1.05;
            waterNeeded *= 0.7;
        }

        if (counter % 3 == 0) {

            foodNeeded -= (foodNeeded / count);
            energy *= 1.1;
        }

        counter++;
    }

    console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);

}








quest((["10", "7", "5035.5", "11.3", "7.2", "942.3", "500.57", "520.68", "540.87", "505.99", "630.3", "784.20", "321.21", "456.8", "330"]))