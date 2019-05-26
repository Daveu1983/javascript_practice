const {
    sumDigits,
  } = require("../challenges/week10");

  describe("sumDigits", () => {
    test("adds up all digits", () => {
        expect(sumDigits(9375110)).toBe(26)
    });

    test("adds up all digits", () => {
        expect(sumDigits(9234222)).toBe(24)
    });
});