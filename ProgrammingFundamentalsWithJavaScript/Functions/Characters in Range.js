function solve(a, b) {
    let first = a.charCodeAt();
    let second = b.charCodeAt();
    let result = [];

    if (first < second) {
        for (let i = first + 1; i < second; i++) {
            result.push(String.fromCharCode(i));
        }
    } else if (first > second) {
        for (let i = first - 1; i > second; i--) {
            result.unshift(String.fromCharCode(i));
        }
    } else (
        console.log(String.fromCharCode(first))
    )

    console.log(result.join(` `));

}
solve(`C`, `#`) 