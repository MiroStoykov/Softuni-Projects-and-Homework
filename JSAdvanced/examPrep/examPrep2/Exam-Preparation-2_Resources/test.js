import { expect } from "chai";
import { findNewApartment } from "./findApartment.js";

describe(`Mocha suite`, function () {
    describe(`isGoodLocation`, function () {
        it(`fake sity and true`, () => {
            expect(findNewApartment.isGoodLocation("StZ", true)).to.equal("This location is not suitable for you.");
        })
        it(`fake sity and false`, () => {
            expect(findNewApartment.isGoodLocation("StZ", false)).to.equal("This location is not suitable for you.");
        })
        it(`true sity and false`, () => {
            expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.");
        })
        it(`true sity and true`, () => {
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
        })
        it(`non string sity`, () => {
            expect(() => findNewApartment.isGoodLocation(12, false)).to.throw("Invalid input!");
        })

        it(`true sity and non bulean string`, () => {
            expect(() => findNewApartment.isGoodLocation(`Sofia`, 12)).to.throw("Invalid input!");
        })
        it(`true sity and nonbulean number`, () => {
            expect(() => findNewApartment.isGoodLocation(12, `dsa`)).to.throw("Invalid input!");
        })
    })

    describe(`isLargeEnough`, function () {
        it(`true apartments and area`, () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 55)).to.equal("60");
        })
        it(`true apartments and area`, () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 35)).to.equal("40, 50, 60");
        })
        it(`true apartments and bigger area`, () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 65)).to.equal(``);
        })
        it(`false apartments and area`, () => {
            expect(() => findNewApartment.isGoodLocation(12, 12)).to.throw("Invalid input!");
        })
        it(`false apartments and area`, () => {
            expect(() => findNewApartment.isGoodLocation(``, 12)).to.throw("Invalid input!");
        })
        it(`false apartments and area`, () => {
            expect(() => findNewApartment.isGoodLocation([312], ``)).to.throw("Invalid input!");
        })
        it(`false apartments and area`, () => {
            expect(() => findNewApartment.isGoodLocation([321], [])).to.throw("Invalid input!");
        })
    })
    describe(`isItAffordable`, function () {
        it(`true apartments and area`, () => {
            expect(findNewApartment.isItAffordable(123, 55)).to.equal("You don't have enough money for this house!");
        })
        it(`true apartments and area`, () => {
            expect(findNewApartment.isItAffordable(12, 55)).to.equal("You can afford this home!");
        })
        it(`false apartments and area`, () => {
            expect(() => findNewApartment.isItAffordable([321], 12)).to.throw("Invalid input!");
        })
        it(`false apartments and area`, () => {
            expect(() => findNewApartment.isItAffordable(12, [321])).to.throw("Invalid input!");
        })
        it(`false apartments and area`, () => {
            expect(() => findNewApartment.isItAffordable([321], ``)).to.throw("Invalid input!");
        })
        it(`false apartments and area`, () => {
            expect(() => findNewApartment.isItAffordable(``, 12)).to.throw("Invalid input!");
        })

    })
})