function solve(r, h) {

    console.log(`volume = ${((1 / 3) * (Math.pow(r, 2)) * Math.PI * h).toFixed(4)}`);
    console.log(`area = ${(Math.PI * r * (r + Math.sqrt(h * h + r * r))).toFixed(4)} `);

}

solve(3, 5)
// πr[r + √(h2 + r2)].