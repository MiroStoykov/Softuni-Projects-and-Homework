function solve(arr) {

    let masages = arr.shift();
    let regex = /[s,t,a,r]/gi;
    let decryptedResult = [];

    for (let i = 0; i < masages; i++) {
        let num = arr[i].match(regex);

        let count = 0;

        if (num) {
            count = num.length;
        } else {
            decryptedResult.push(arr[i]);
            continue;
        }

        let current = ``;

        for (let j = 0; j < arr[i].length; j++) {
            current += String.fromCharCode(arr[i].charCodeAt(j) - count);
        }
        decryptedResult.push(current);
    }

    let regex2 = /[^-@!:>]*@[^-@!:>]*(?<planet>[A-Z][a-z]*)[^-@!:>]*?:.[^-@!:>]*?(?<population>\d+).[^-@!:>]*![^-@!:>]*(?<attackType>[A,D])[^-@!:>]*![^-@!:>]*->[^-@!:>]*?(?<soldierCount>\d+)[^-@!:>]*/;

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (const i of decryptedResult) {
        let current = i.match(regex2);

        if (current) {
            if (current.groups.attackType === `A`) {
                attackedPlanets.push(current.groups.planet);
            } else if (current.groups.attackType === `D`) {
                destroyedPlanets.push(current.groups.planet);
            }
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    if (attackedPlanets.length > 0) {
        attackedPlanets.sort((a, b) => a.localeCompare(b));
        attackedPlanets.forEach(a => console.log(`-> ` + a));
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    if (destroyedPlanets.length > 0) {
        destroyedPlanets.sort((a, b) => a.localeCompare(b));
        destroyedPlanets.forEach(a => console.log(`-> ` + a));
    }
}

solve(
    [2,
        `STCDoghudd4 = 63333$D$0A53333`,
        `EHfsytsnhf ? 8555 & I & 2C9555SR`]
);
