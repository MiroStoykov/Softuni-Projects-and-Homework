function vacation(count, groupType, day) {

    let price = 0;

    if (groupType == `Students`) {
        switch (day) {
            case `Friday`:
                price = 8.45 * count; break;
            case `Saturday`:
                price = 9.8 * count; break;
            case `Sunday`:
                price = 10.46 * count; break;
        }
        if (count >= 30) {
            price *= 0.85;
        }
    }

    if (groupType == `Business`) {
        if (count >= 100) {
            count -= 10;
        }
        switch (day) {
            case `Friday`:
                price = 10.9 * count; break;
            case `Saturday`:
                price = 15.6 * count; break;
            case `Sunday`:
                price = 16 * count; break;
        }
    }

    if (groupType == `Regular`) {
        switch (day) {
            case `Friday`:
                price = 15 * count; break;
            case `Saturday`:
                price = 20 * count; break;
            case `Sunday`:
                price = 22.5 * count; break;
        }
        if (count >= 10 && count <= 20) {
            price *= 0.95;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);

}