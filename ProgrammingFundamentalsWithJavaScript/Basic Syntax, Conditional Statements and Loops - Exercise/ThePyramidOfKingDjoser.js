function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lazuli = 0;
    let gold = 0;
    let counter = 1;
    let steps = Math.ceil(base / 2);

    for (let i = 1; i <= steps - 1; i++) {
        stone += ((base - i * 2) * (base - i * 2)) * increment;
        if (counter % 5 == 0) {
            lazuli += (((base - (counter - 1) * 2) * 4) - 4) * increment;
        } else {
            marble += (((base - (counter - 1) * 2) * 4) - 4) * increment;
        }
        counter++;
    }

    if (base % 2 == 0) {
        gold = 4;
    } else {
        gold = 1;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor((steps) * increment)}`);

}

thePyramidOfKingDjoser(11, 1)