function sortNumbers(num1, num2, num3) {
    let nums = num1 + ' ';
    nums += num2 + ' ';
    nums += num3 + ' ';

    let sortedNums = nums.split(' ').sort(function (a, b) { return a - b }).reverse();

    for (let i = 0; i < 3; i++) {
        console.log(sortedNums[i]);
    }
}

sortNumbers(21, 2, 4)