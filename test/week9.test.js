const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/week9");

describe("sumMultiples", () => {
    test("returns sum of numbers that are divisible by 3 or 5", () => {
        expect(sumMultiples([9, 3, 7, 5, 1, 10])).toBe(27);
    });
    test("returns sum of numbers that are divisible by 3 or 5, when no numbers are zero should be returned", () => {
        expect(sumMultiples([2, 11, 8, 13, 1, 16])).toBe(0);
    });
});