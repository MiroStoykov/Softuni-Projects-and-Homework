class BookClub {
    library;
    books = [];
    members = [];

    constructor(library) {
        this.library = library;
    }

    addBook(title, author) {
        let obj = {};
        obj.title = title;
        obj.author = author;

        let counter = false;

        for (const i of this.books) {
            if (i.title == title && i.author == author) {
                counter = true;
                return `The book "${title}" by ${author} is already in ${this.library} library.`;
            }
        }

        if (!counter) {
            this.books.push(obj);
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
        }
    }

    addMember(memberName) {
        let counter = false;
        for (const i of this.members) {
            if (i == memberName) {
                counter = true;
                return `Member ${memberName} is already a part of the book club.`;
            }
        }
        if (!counter) {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`;
        }
    }

    assignBookToMember(memberName, bookTitle) {
        let counter1 = false;
        for (let i of this.members) {
            if (i == memberName) {
                counter1 = true;
            }
        }
        if (!counter1) {
            throw new Error(`Member ${memberName} not found.`);
        }

        let counter = false;
        let index = 0;
        for (const i of this.books) {
            if (i.title == bookTitle) {
                counter = true;
                index = this.books.indexOf(i);
                return `Member ${memberName} has been assigned the book "${i.title}" by ${i.author}.`
            }
        }
        if (counter) {
            this.books.splice(index, 1);
        } else {
            throw new Error(`Book "${bookTitle}" not found.`)
        }
    }

    generateReadingReport() {
        let result = [];
        if (this.members.length == 0) {
            result.push("No members in the book club.");
        } else if (this.books.length == 0) {
            result.push("No available books in the library.");
        } else {
            result.push(`Available Books in ${this.library} library:`)
            for (const i of this.books) {
                result.push(`"${i.title}" by ${i.author}`)
            }
        }
        return result.join(`\n`);
    }
}

let Club = new BookClub('The Bookaholics');

console.log(Club.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(Club.addBook("1984", "George Orwell"));
console.log(Club.addMember("Alice"));
console.log(Club.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(Club.generateReadingReport());
// , "Available Books in The Bookaholics library:\n\"1984\" by George Orwell");
