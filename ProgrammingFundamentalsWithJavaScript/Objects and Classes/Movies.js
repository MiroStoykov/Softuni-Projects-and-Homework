function solve(arr) {

    let movies = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(` `);
        let obj = {};
        if (current[0] == `addMovie`) {
            current.shift();
            let counter = false;
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].name == current.join(` `)) {
                    counter = true;
                }
            }
            if (!counter) {
                obj.name = current.join(` `)
                movies.push(obj);
            }
        }
    }


    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(` `);
        if (current.includes(`onDate`)) {
            let index = current.indexOf(`onDate`);
            let date = current.pop();
            let name = current.splice(0, index);
            for (const i of movies) {
                if (i.name == name.join(` `)) {
                    i.date = date;
                }
            }
        }
        if (current.includes(`directedBy`)) {
            let index = current.indexOf(`directedBy`);
            let nameDirector = current.splice(index + 1, current.length);
            let nameMovie = current.splice(0, index);
            for (const i of movies) {
                if (i.name == nameMovie.join(` `)) {
                    i.director = nameDirector.join(` `);
                }
            }
        }
    }

    for (const obj of movies) {
        if (obj.date != undefined && obj.director != undefined) {
            console.log(JSON.stringify(obj));
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