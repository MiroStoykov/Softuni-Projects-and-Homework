function solve(arr) {

    let capitalLetters = /[A-Z]/;
    let smallLetters = /[a-z]/;
    let digit = /[0-9]/;

    let names = arr.shift().split(`, `);


    let result = [];

    for (const i of arr) {
        let name = ``;
        let distance = 0;
        let obj = { name: null, distance: null };

        for (const j of i) {
            if (j.match(capitalLetters) || j.match(smallLetters)) {
                name += j;
            }
            if (j.match(digit)) {
                distance += Number(j);
            }
        }
        if (names.includes(name)) {
            let keys = [];
            result.forEach(a => keys.push((a.name)))
            if (keys.includes(name)) {
                let index = keys.indexOf(name);
                result[index].distance += distance;
            } else {
                obj.name = name;
                obj.distance = distance
                result.push(obj);
            }
        }
    }

    result.sort((a, b) => b.distance - a.distance);

    console.log(`1st place: ${result[0].name}`);
    console.log(`2nd place: ${result[1].name}`);
    console.log(`3rd place: ${result[2].name}`);
}

solve(
    ['George, Peter, Bill, Tom',
        'G4e@55or%6g6!68e!!@ ',
        'R1@!3a$y4456@',
        'B5@i@#123ll',
        'G@e54o$r6ge#',
        '7P%et^#e5346r',
        'T$o553m&6',
        'end of race']
);

// solve('A12b s17G')