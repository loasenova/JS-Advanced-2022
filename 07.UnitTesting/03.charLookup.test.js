let {assert} = require("chai");
let {charLookup} = require("./03.charLookup");

describe("Test charLookuo functionality", () => {
    it ("Result should be undefined with an empty array as first argument", () => {
        assert.equal(charLookup([], 0), undefined)
    })
    it ("Result should be undefined with a floating-point number as second argument", () => {
        assert.equal(charLookup("chai", 3.5), undefined)
    })
    it ("Result should be Incorrect index with a negative number as second argument", () => {
        assert.equal(charLookup("chai", -1), "Incorrect index")
    })
    it ("Result should be Incorrect index with an uncorrect index as second argument", () => {
        assert.equal(charLookup("chai", 100), "Incorrect index")
    })
    it ("Result should be correct value with a SoftUni as first argument and 7 as second argument", () => {
        assert.equal(charLookup("SoftUni", 0), "S")
    })
})