function solve(input) {

    let shelves = [];

    for (const i of input) {

        let current1 = i.split(` -> `);
        let current2 = i.split(`: `);

        if (current1.length == 2) {
            let genre = current1[1];
            let id = Number(current1[0]);
            let counter = false;
            for (const j of shelves) {
                if (j.id == id) {
                    counter = true;
                }
            }
            if (!counter) {
                let obj = {};
                obj.id = id;
                obj.genre = genre;
                obj.books = [];
                obj.bookCount = 0;
                shelves.push(obj);
            }
        }

        if (current2.length == 2) {
            let current = current2[1].split(`, `);
            let book = current2[0];
            let autor = current[0];
            let genre = current[1];

            for (const j of shelves) {
                if (j.genre == genre) {
                    let arr = [book, autor];
                    j.books.push(arr);
                    j.books.sort((a, b) => a[0].localeCompare(b[0]));
                    j.bookCount++;
                }
            }
        }
    }
    shelves.sort((a, b) => b.bookCount - a.bookCount)

    for (const i of shelves) {
        console.log(`${i.id} ${i.genre}: ${i.bookCount}`);
        for (const j of i.books) {
            console.log(`--> ${j[0]}: ${j[1]}`);
        }
    }
}

solve(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci - fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci - fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci - fi',
    'Name of Earth: Jo Bell, sci - fi', 'Pilots of Stone: Brook Jay, history']);
