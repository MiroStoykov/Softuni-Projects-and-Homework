class List {

    list = [];
    size = 0;

    add(e) {
        this.list.push(e);
        this.size++;
        this.list.sort((a, b) => a - b);
    }

    remove(i) {
        if (i >= 0 && i < this.list.length) {
            this.list.splice(i, 1);
            this.size--;
            this.list.sort((a, b) => a - b)
        }
    }

    get(i) {
        if (i >= 0 && i < this.list.length) {
            return this.list[i];
        }
    }
}

// expect(result.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
// expect(result.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
// expect(result.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

// Instantiate and test functionality
var myList = new List();
// expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

myList.add(5);
// expect(myList.get(0)).to.equal(5, "Element wasn't added");

myList.add(3);
// expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");
console.log(myList.get(0));
myList.remove(0);
console.log(myList.get(0));

// expect(myList.get(0)).to.equal(5, "Element wasn't removed");
// expect(myList.size).to.equal(1, "Element wasn't removed");