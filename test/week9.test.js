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
describe("isValidDNA", () => {
    test("returns true as only characters C, G, T, A are used", () => {
        expect(isValidDNA("CGTAAGCATCGA")).toBe(true);
    });
    test("returns false as not only characters C, G, T, A are used", () => {
        expect(isValidDNA("CGTAAGBCATCGA")).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("returns the Complementary DNA", () => {
      expect(getComplementaryDNA("CAGT")).toBe("ACTG");
    });

    test("returns the Complementary DNA", () => {
        expect(getComplementaryDNA("CAGTTGACTGGTC")).toBe("ACTGGTCAGTTGA");
      });

    test('returns error when not valid DNA', () => {
      expect(() => { 
        getComplementaryDNA("CAGTB");
        }).toThrowError( new Error("not valid DNA"));
      });
  });