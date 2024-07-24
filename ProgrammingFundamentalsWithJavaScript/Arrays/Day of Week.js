function solve(input) {

    let weekDays = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];

    if (input > 0 && input < 8 && input % 1 == 0) {
        console.log(weekDays[input - 1]);
    } else (
        console.log("Invalid day!")
    )

}