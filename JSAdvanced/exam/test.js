import { describe } from "chai";
import { findNewApartment } from "../examPrep/examPrep2/Exam-Preparation-2_Resources/findApartment";

describe(`First block`, function () {

    it("Return correct output for AM", () => {
        expect(motorcycleRider.licenseRestriction("AM")).to.equal("something")
    })
    it("Return correct output for AM", () => {
        expect(motorcycleRider.licenseRestriction("AM")).to.equal("something")
    })

})

describe(`throw`, function () {
    it(`Throw error for invalid input`, () => {
        expect(() => motorcycleRider.motorcycleShowroom([], 3)).to.throw("something");
    })
})

ine