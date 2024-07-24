function solve() {
    class Balloon {
        constructor(collor, gas) {
            this.color = collor;
            this.gasWeight = Number(gas);
        }
    }
    class PartyBalloon extends Balloon {
        constructor(collor, gas, ribCollor, ribLenght) {
            super(collor, gas);
            this.ribbonColor = ribCollor;
            this.ribbonLength = Number(ribLenght);
            this.ribbon = {
                collor: ribCollor,
                length: ribLenght
            }
        }
        get ribbon() {
            return this._ribbon;
        }
        set ribbon(data) {
            this._ribbon = data;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(collor, gas, ribCollor, ribLenght, text) {
            super(collor, gas, ribCollor, ribLenght);
            this.text = text;
        }
        get text() {
            return this._text;
        }
        set text(text) {
            this._text = text;
        }
    }
    return { Balloon, PartyBalloon, BirthdayBalloon };
}


let classes = solve();

let testo = new classes.BirthdayBalloon(1, 1, 1, 1, 1);

console.log(testo.ribbon);

let testBalloon = new classes.Balloon(

    "yellow", 20.5);

let testPartyBalloon = new

    classes.PartyBalloon("yellow", 20.5,

        "red", 10.25);

let ribbon = testPartyBalloon.ribbon;

console.log(testBalloon);

console.log(testPartyBalloon);

console.log(ribbon);