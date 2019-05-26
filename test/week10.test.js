const {
    sumDigits,
    createRange,
  } = require("../challenges/week10");

  describe("sumDigits", () => {
    test("adds up all digits", () => {
        expect(sumDigits(9375110)).toBe(26)
    });

    test("adds up all digits", () => {
        expect(sumDigits(9234222)).toBe(24)
    });
});

describe("create a range of numbers", () => {
    test("0 to 10 in steps of 2", () => {
        expect(createRange(0,10,2)).toEqual([0,2,4,6,8,10])
    });

    test("3 to 372 in steps of 11", () => {
        expect(createRange(3,372,11)).toEqual([3,14,25,36,47,58,69,80,91,102,113,124,135,146,157,168,179,
            190, 201, 212, 223, 234, 245, 256, 267, 278, 289, 300, 311, 322, 333, 344, 355, 366])
    });

    test("0 to 1 in steps of 1", () => {
        expect(createRange(0,1,1)).toEqual([0,1])
    });

    test('returns error when range is 0', () => {
        expect(() => { 
          createRange(0,9,0);
          }).toThrowError( new Error("end or step cannot be zero"));
        });
    test('returns error when range is 0', () => {
        expect(() => { 
            createRange(0,0,9);
            }).toThrowError( new Error("end or step cannot be zero"));
        });

});