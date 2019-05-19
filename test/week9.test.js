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

describe("is it prime", () => {
    test("returns true if a number is prime", () => {
      expect(isItPrime("7919")).toBe(true);
    });
    test("returns true if a number is prime", () => {
        expect(isItPrime("13")).toBe(true);
      });
    test("returns false if a number is prime", () => {
        expect(isItPrime("120")).toBe(false);
      });
    test("returns true if a number is prime", () => {
        expect(isItPrime("24862100")).toBe(false);
      });
  });

describe("create a matrix", () => {
    test("returns array matrix of words", () => {
        expect(createMatrix(3,"foo")).toEqual([["foo","foo", "foo"],["foo","foo", "foo"],["foo","foo", "foo"]]);
    });
    test("returns array matrix of words", () => {
        expect(createMatrix(10,"It's there")).toEqual([
            ["It's there","It's there","It's there","It's there","It's there",
            "It's there","It's there","It's there","It's there","It's there"],
            ["It's there","It's there","It's there","It's there","It's there",
            "It's there","It's there","It's there","It's there","It's there"],
            ["It's there","It's there","It's there","It's there","It's there",
            "It's there","It's there","It's there","It's there","It's there"],
            ["It's there","It's there","It's there","It's there","It's there",
            "It's there","It's there","It's there","It's there","It's there"],
            ["It's there","It's there","It's there","It's there","It's there",
            "It's there","It's there","It's there","It's there","It's there"],
            ["It's there","It's there","It's there","It's there","It's there",
            "It's there","It's there","It's there","It's there","It's there"],
            ["It's there","It's there","It's there","It's there","It's there",
            "It's there","It's there","It's there","It's there","It's there"],
            ["It's there","It's there","It's there","It's there","It's there",
            "It's there","It's there","It's there","It's there","It's there"],
            ["It's there","It's there","It's there","It's there","It's there",
            "It's there","It's there","It's there","It's there","It's there"],
            ["It's there","It's there","It's there","It's there","It's there",
            "It's there","It's there","It's there","It's there","It's there"],
            ]);
    });
});
describe("are we covered", () => {
    test("returns true if three people are woking that day", () => {
      const staff = [
          {name: "Sally", rota:["Wednesday", "Sunday", "Friday"]},
          {name: "Brian", rota:["Monday", "Tuesday", "Saturday"]},
          {name: "Steve", rota:["Monday", "Tuesday", "Friday"]},
          {name: "Karl", rota:["Thursday", "Tuesday", "Friday"]}
      ]  
      expect(areWeCovered(staff, "Tuesday")).toBe(true);
    });
    test("returns true if three people are woking that day", () => {
        const staff = [
            {name: "Sally", rota:["Wednesday", "Sunday", "Friday"]},
            {name: "Brian", rota:["Monday", "Tuesday", "Saturday"]},
            {name: "Steve", rota:["Monday", "Tuesday", "Friday"]},
            {name: "Karl", rota:["Thursday", "Tuesday", "Friday"]}
        ]  
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
      });
});