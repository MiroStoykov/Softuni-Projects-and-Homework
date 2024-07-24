function solve(arr) {

    let guestList = [];
    let counter = true;
    let guestCount = 0;

    arr.forEach(e => {
        if (e == `PARTY`) {
            counter = false;
        }
        if (counter) {
            guestList.push(e);
            guestCount = guestList.length;
        }
        if (!counter && guestList.includes(e)) {
            let index = guestList.indexOf(e);
            guestList.splice(index, 1);
            guestCount--;
        }
    });

    console.log(guestCount);
    guestList.map(a => {
        if (!isNaN(a[0])) {
            console.log(a);
        }
    });
    guestList.map(a => {
        if (isNaN(a[0])) {
            console.log(a);
        }
    });
}



solve(
    [
        '9NoBUajQ',
        '7IK9Yo0h',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
)


