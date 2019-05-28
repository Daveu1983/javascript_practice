const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
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
describe("getScreentimeAlertList", () => {
    test("return a list of users whose screen time is 100 minutes or over", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                             { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                             { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                             { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                             { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                            ]
               },
               {
                username: "brad_Jones87",
                name: "Brad Jones",
                screenTime: [
                             { date: "2019-05-04", usage: { mapMyRun: 40, whatsApp: 40, facebook: 9, safari: 10} },
                             { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                             { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ]
               },
               {
                username: "Ryan_Giggs92",
                name: "Ryan Giggs",
                screenTime: [
                             { date: "2019-05-04", usage: { mapMyRun: 50, whatsApp: 10, facebook: 30, safari: 10} },
                             { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                             { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ]
               },
               {
                username: "Fred_Flinstone12",
                name: "Fred Flinstone",
                screenTime: [
                             { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                             { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                             { date: "2019-05-04", usage: { mapMyRun: 90, whatsApp: 0, facebook: 0, safari: 31} },
                            ]
               },
             ]
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234", "Ryan_Giggs92", 
        "Fred_Flinstone12"])
    });
});
describe("HEX TO RGB", () => {
    test("converts hex to rgb", () => {
        expect(hexToRGB("FF1133")).toBe("rgb(255,17,51)")
    });
    test("converts hex to rgb", () => {
        expect(hexToRGB("010101")).toBe("rgb(1,1,1)")
    });
    test("converts hex to rgb", () => {
        expect(hexToRGB("A1B2C3")).toBe("rgb(161,178,195)")
    });
    test("converts hex to rgb", () => {
        expect(hexToRGB("DD1E3D")).toBe("rgb(221,30,61)")
    });
});
describe("find the winner", () => {
    test("x's won", () => {
        const board = [
            ["X", "X",  "X"],
            [null, null, "0"],
            ["X", null, "0"]
        ]
        expect(findWinner(board)).toBe("X")
    });
    test("0's won", () => {
        const board = [
            [null, null,  "X"],
            ["0", "0", "0"],
            ["X", null, "0"]
        ]
        expect(findWinner(board)).toBe("0")
    })
    test("x's won", () => {
        const board = [
            [null, null,  "0"],
            [null, "0", "0"],
            ["X", "X", "X"]
        ]
        expect(findWinner(board)).toBe("X")
    });
    test("x's won", () => {
        const board = [
            ["X", null,  "0"],
            ["X", "0", "0"],
            ["X", null, null]
        ]
        expect(findWinner(board)).toBe("X")
    });
    test("x's won", () => {
        const board = [
            [null, "X",  "0"],
            ["0", "X", "0"],
            [null,"X" , null]
        ]
        expect(findWinner(board)).toBe("X")
    });
    test("0's won", () => {
        const board = [
            ["X", null,  "0"],
            ["X", "0", "0"],
            [null, null, "0"]
        ]
        expect(findWinner(board)).toBe("0")
    });
    test("x's won", () => {
        const board = [
            [null, "X",  "0"],
            ["0", "X", "0"],
            [null,"X" , null]
        ]
        expect(findWinner(board)).toBe("X")
    });
    test("0's won", () => {
        const board = [
            ["X", null,  "0"],
            ["X", "0", "0"],
            [null, null, "0"]
        ]
        expect(findWinner(board)).toBe("0")
    });
    test("x's won", () => {
        const board = [
            ["X", null,  "0"],
            ["0", "X", "0"],
            [null,null, "X"]
        ]
        expect(findWinner(board)).toBe("X")
    });
    test("0's won", () => {
        const board = [
            ["X", null,  "0"],
            ["X", "0", null],
            ["0", null, "0"]
        ]
        expect(findWinner(board)).toBe("0")
    });
    test("no one won", () => {
        const board = [
            [null, "X",  "0"],
            ["X", null, "X"],
            ["0", null, "0"]
        ]
        expect(findWinner(board)).toBe(null)
    });
});

