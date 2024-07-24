import { expect } from "chai";
import { motorcycleRider } from "./Motorcycle Rider.js";

describe(`Mocha suite`, function () {

    describe(`First block`, function () {

        it("Return correct output for AM", () => {
            expect(motorcycleRider.licenseRestriction("AM")).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        })

        it(`Return correct output for A1`, () => {
            expect(motorcycleRider.licenseRestriction(`A1`)).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
        })

        it(`Return correct output for A2`, () => {
            expect(motorcycleRider.licenseRestriction(`A2`)).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        })

        it(`Return correct output for A`, () => {
            expect(motorcycleRider.licenseRestriction(`A`)).to.equal("No motorcycle restrictions, and the minimum age is 24.")
        })

        it(`Throw error`, () => {
            expect(() => motorcycleRider.licenseRestriction(5)).to.throw();
        })

        it(`Throw error`, () => {
            expect(() => motorcycleRider.licenseRestriction(`z`)).to.throw();
        })
    })

    describe(`Second block`, function () {
        it(`Return correct output for motorcycleShowroom`, () => {
            expect(motorcycleRider.motorcycleShowroom([125, 250, 600, 4324], 1000)).to.equal("There are 3 available motorcycles matching your criteria!")
        })

        it(`Throw error for invalid input`, () => {
            expect(() => motorcycleRider.motorcycleShowroom(2, `dsa`)).to.throw("Invalid Information!");
        })

        it(`Throw error for invalid input`, () => {
            expect(() => motorcycleRider.motorcycleShowroom([], 3)).to.throw("Invalid Information!");
        })
    })

    describe(`Third block`, function () {
        it(`Return correct output for purchase`, () => {
            expect(motorcycleRider.otherSpendings([`helmet`, `helmet`, `jacked`], [`engine oil`, `engine oil`, `oil filter`], true))
                .to.equal("You spend $783.00 for equipment and consumables with 10% discount!")
        })

        it(`Return correct output for purchase`, () => {
            expect(motorcycleRider.otherSpendings([`helmet`, `helmet`, `jacked`], [`engine oil`, `engine oil`, `oil filter`], false))
                .to.equal("You spend $870.00 for equipment and consumables!")
        })

        it(`Throw eroor for incorect input`, () => {
            expect(() => motorcycleRider.otherSpendings(4, [`engine oil`, `engine oil`, `oil filter`], true))
                .to.throw("Invalid Information!");
        })

        it(`Throw eroor for incorect input`, () => {
            expect(() => motorcycleRider.otherSpendings([`helmet`, `helmet`, `jacked`], 2, true))
                .to.throw("Invalid Information!");
        })

        it(`Throw eroor for incorect input`, () => {
            expect(() => motorcycleRider.otherSpendings([`helmet`, `helmet`, `jacked`], [`engine oil`, `engine oil`, `oil filter`], 2))
                .to.throw("Invalid Information!");
        })
    })
})