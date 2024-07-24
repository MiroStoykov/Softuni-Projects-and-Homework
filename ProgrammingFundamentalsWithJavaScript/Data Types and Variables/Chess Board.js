function solve(num) {

    let first = true;
    let black = `<span class="black"></span>`;
    let white = `<span class="white"></span>`;


    console.log(`<div class="chessboard">`);

    for (let i = 0; i < num; i++) {
        console.log(`<div>`);

        if (i % 2 == 0) {
            first = true;
        } else (
            first = false
        )

        for (let j = 0; j < num; j++) {
            if (first == true) {
                console.log(black);
                first = false;
            } else if (first == false) {
                console.log(white);
                first = true;
            }
        }

        console.log(`</div>`);
    }

    console.log(`</div>`);

}

solve(3)