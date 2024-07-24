function solve(n, op1, op2, op3, op4, op5) {

    let num = Number(n);

    let ops = [op1, op2, op3, op4, op5];

    for (const i of ops) {
        if (i == `chop`) { console.log(num / 2); num /= 2; }
        if (i == `dice`) { console.log(Math.sqrt(num)); num = Math.sqrt(num); }
        if (i == `spice`) { console.log(num + 1); num += 1; }
        if (i == `bake`) { console.log(num * 3); num *= 3; }
        if (i == `fillet`) { console.log(num * 0.8); num *= 0.8; }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', `fillet`);