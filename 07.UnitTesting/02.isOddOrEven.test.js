let {assert} = require("chai");
let {isOddOrEven} = require("./02.isOddOrEven");

describe("Test isOddOrEven functionality", () => {
    it ("Result should be undefined with a number as argument", () => {
        assert.equal(isOddOrEven(5), undefined)
    })
    it ("Result should be undefined with an empty array as argument", () => {
        assert.equal(isOddOrEven([]), undefined)
    })
    it ("Result should be even with a Love as argument", () => {
        assert.equal(isOddOrEven("Love"), "even")
    })
    it ("Result should be odd with a SoftUni as argument", () => {
        assert.equal(isOddOrEven("softUni"), "odd")
    })
})