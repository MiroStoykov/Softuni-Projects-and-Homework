function solve(params) {
    if (params == 2 || params == 3) {
        console.log(true);
        return;
    }
    if (params % 2 == 0 || params % 3 == 0) {
        console.log(false);
    } else (
        console.log(true)
    )
}