function solve(arr, str) {

    class Ticket {
        destination;
        price;
        status;

        constructor(d, p, s) {
            this.destination = d;
            this.price = Number(p);
            this.status = s
        }
    }

    let result = [];

    for (const i of arr) {
        let current = i.split(`|`);
        let ticket = new Ticket(current[0], current[1], current[2],)

        result.push(ticket);
    }

    if (str == `destination`) {
        result.sort((a, b) => a.destination.localeCompare(b.destination));
    }


    if (str == `price`) {
        result.sort((a, b) => a.price - b.price);
    }

    if (str == `status`) {
        result.sort((a, b) => a.status.localeCompare(b.status));
    }

    return result;
}

solve(
    ['Philadelphia|94.20|available',

        'New York City|95.99|available',

        'New York City|95.99|sold',

        'Boston|126.20|departed'],

    'status'
)