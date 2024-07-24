import { expect } from "chai";
import { planYourTrip } from "./planYourTrip.js";

describe(``, function () {
    describe(`First method`, function () {
        it("Valid", () => {
            expect(planYourTrip.choosingDestination("Ski Resort", `Winter`, 2024)).to.equal(`Great choice! The Winter is the perfect time to visit the Ski Resort.`)
        })
        it("Valid", () => {
            expect(planYourTrip.choosingDestination("Ski Resort", `Summer`, 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`)
        })
        it(`Throw error for invalid year`, () => {
            expect(() => planYourTrip.choosingDestination("Ski Resort", `Winter`, 20242)).to.throw("Invalid Year!");
        })
        it(`Throw error for invalid place`, () => {
            expect(() => planYourTrip.choosingDestination("123", `Winter`, 2024)).to.throw("This destination is not what you are looking for.");
        })

    })
    describe(`second method`, function () {
        it("Valid", () => {
            expect(planYourTrip.exploreOptions((["Skiing ", "Snowboarding "]), 0)).to.equal(`Snowboarding `);
        })
        it("Valid", () => {
            expect(planYourTrip.exploreOptions((["Skiing ", "Snowboarding ", "Winter Hiking "]), 0)).to.equal(`Snowboarding , Winter Hiking `);
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding "], 5)).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding "], -5)).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding "], -5.6)).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.exploreOptions([], 0)).to.throw("Invalid Information!");
        })

        it(`Throw`, () => {
            expect(() => planYourTrip.exploreOptions(``, 0)).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding "], ``)).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.exploreOptions(5, 5)).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding "], [])).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding "], 2.2)).to.throw("Invalid Information!");
        })
    })

    describe(`Third method`, function () {
        it("Valid", () => {
            expect(planYourTrip.estimateExpenses(20, 20)).to.equal("The trip is budget-friendly, estimated cost is $400.00.");
        })
        it("Valid", () => {
            expect(planYourTrip.estimateExpenses(20, 25)).to.equal("The trip is budget-friendly, estimated cost is $500.00.");
        })
        it("Valid", () => {
            expect(planYourTrip.estimateExpenses(20, 60)).to.equal("The estimated cost for the trip is $1200.00, plan accordingly.");
        })
        it("Valid", () => {
            expect(planYourTrip.estimateExpenses(20.2, 60)).to.equal("The estimated cost for the trip is $1212.00, plan accordingly.");
        })
        it("Valid", () => {
            expect(planYourTrip.estimateExpenses(20, 60.2)).to.equal("The estimated cost for the trip is $1204.00, plan accordingly.");
        })

        it(`Throw`, () => {
            expect(() => planYourTrip.estimateExpenses(20, ``)).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.estimateExpenses(``, 19)).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.estimateExpenses([], 1)).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.estimateExpenses(20, [])).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.estimateExpenses(20, 0)).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.estimateExpenses(0, 21)).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.estimateExpenses(-20, 21)).to.throw("Invalid Information!");
        })
        it(`Throw`, () => {
            expect(() => planYourTrip.estimateExpenses(20, -20)).to.throw("Invalid Information!");
        })
    })
})
