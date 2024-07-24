function solve(arr) {

    let movies = [];

    for (const i of arr) {
        let current = i.split(` `);
        let counter = {};
        if (current.includes(`addMovie`)) {
            counter.name = i.split(`addMovie `)[1];
            movies.push(counter);
        } else if (current.includes(`directedBy`)) {
            let obj = i.split(` directedBy `);
            for (const j of movies) {
                if (j.name == obj[0]) {
                    j.director = obj[1];
                }
            }
        } else if (current.includes(`onDate`)) {
            let obj = i.split(` onDate `);
            for (const j of movies) {
                if (j.name == obj[0]) {
                    j.date = obj[1];
                }
            }
        }
    }
    for (const iterator of movies) {
        if (iterator.director != undefined && iterator.date != undefined) {
            console.log(JSON.stringify(iterator));
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)