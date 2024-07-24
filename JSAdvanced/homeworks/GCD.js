function solve(n1, n2) {
    let divisor = 0;
    let num = 1;
    while (num <= n1 && num <= n2) {
        if (n1 % num == 0 && n2 % num == 0) {
            divisor = num;
        }
        num++;
    }
    console.log(divisor);
}

solve(2154, 458);
solve(15, 5);