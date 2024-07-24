function solve(arr) {

    let regex = /%([A-Z][a-z]+)%.*?<([A-Za-z]{2,})>.*?\|(\d+)\|.*?(\d+[\.\d+]*)(?=\$)/;

    let sum = 0;

    for (const i of arr) {
        let customer = ``;
        let product = ``;
        let count = 0;
        let price = 0;

        if (i.match(regex)) {

            let current = regex.exec(i);

            customer = current[1];
            product = current[2];
            count = Number(current[3]);
            price = Number(current[4]);

        }

        if (customer.length > 0 && product.length > 0 && count > 0 && price > 0) {
            console.log(`${customer}: ${product} - ${(count * price).toFixed(2)}`);
            sum += (count * price);
        }
    }

    console.log(`Total income: ${sum.toFixed(2)}`);
}

solve(
    ['%George%<Croissant>|2|10.3$',
        '%Peter%<Gum>|1|1.3$',
        '%Maria%<Cola>|1|2.4$',
        'end of shift']
);
