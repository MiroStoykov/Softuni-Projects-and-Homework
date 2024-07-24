function printAndSum(num1, num2) {
    let sum = 0;
    let nums = [];
    for (let i = num1; i <= num2; i++) {
        nums.push(i);
        sum += i;
    }
    console.log(nums.join(` `));
    console.log(`Sum: ${sum}`);
}

printAndSum(0, 26);
