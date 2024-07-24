function store(input) {
    let customer = input.pop();
    let prices = input.map(Number);
    let sum = 0;

    for (let i = 0; i < prices.length; i++) {

        if (prices[i] < 0) {
            console.log(`Invalid price!`);
        } else {
            sum += prices[i];
        }

    }
    let taxedSum = sum * 1.2;


    if (taxedSum == 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${(taxedSum - sum).toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${(customer == `special` ? taxedSum * 0.9 : taxedSum).toFixed(2)
            }$`)
    }
}

store((['1050', '200', '450', '2', '18.50', '16.86', 'special']))