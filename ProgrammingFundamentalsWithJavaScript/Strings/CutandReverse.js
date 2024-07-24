function solve(str) {

    let firstHalf = str.slice(0, str.length / 2).split(``);
    let secondHalf = str.slice(str.length / 2, str.length).split(``);

    console.log(firstHalf.reverse().join(``));
    console.log(secondHalf.reverse().join(``));
}

solve(`sihToDtnaCuoYteBIboJsihTtAdooGoSmI`)