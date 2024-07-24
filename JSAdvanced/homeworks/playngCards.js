function solve(f, s) {

    let faces = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`];

    let suits = [`S${`\u2660`}`, `H${`\u2665`}`, `D${`\u2666`}`, `C${`\u2663 `}`];

    if (!faces.includes(f.toString())) {
        throw new Error;
    }

    let counter = false;

    for (const i of suits) {
        if (s === i[0]) {
            s = i.substring(1);
            counter = true;
        }
    }

    if (!counter) {
        throw new Error;
    }

    return {
        face: faces[faces.indexOf(f.toString())],
        suit: s,
        toString() {
            console.log(this.face.toUpperCase() + this.suit.toUpperCase());
        }
    }
}

let result = solve('10', '1');

result.toString();
