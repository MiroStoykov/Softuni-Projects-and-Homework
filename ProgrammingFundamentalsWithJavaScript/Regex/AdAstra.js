function solve(input) {
    let regex = /(#|\|)([A-Za-z ]+)\1(\d\d\/\d\d\/\d\d)\1(\d{1,5})\1/gm;

    let counter;

    let result = [];

    let calories = 0;

    while (counter = regex.exec(input)) {
        let arr = [counter[2], counter[3], counter[4]];
        calories += Number(counter[4]);
        result.push(arr);
    }

    let days = Math.floor(calories / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    result.forEach(a => console.log(`Item: ${a[0]}, Best before: ${a[1]}, Nutrition: ${a[2]}`));
}

solve(`#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|`)
