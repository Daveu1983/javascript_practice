const {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
  roundNumber
} = require("../challenges/week1");

describe("capitalize", () => {
  test("returns a capitalized string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("does nothing if the string is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("capitalizes the first character if the string is a sentence", () => {
    expect(capitalize("the quick fox")).toBe("The quick fox");
  });

  test("undefined gets error", () => {
    expect(() => { 
    capitalize();
    }).toThrowError( new Error("input error"));
  });

  test("not a string gets an error", () => {
    expect(() => { 
    capitalize(123456);
    }).toThrowError( new Error("input error"));
  });
});

describe("generateInitials", () => {
  test("returns the initials of a firstname and surname", () => {
    expect(generateInitials("Frederic", "Bonneville")).toBe("F.B");
  });
  test("not a string gets an error for firstName", () => {
    expect(() => { 
    generateInitials(undefined, "Potter");
    }).toThrowError( new Error("input error"));
  });
  test("not a string gets an error for lastName", () => {
    expect(() => { 
    generateInitials("Harry", null);
    }).toThrowError( new Error("input error"));
  });
});

describe("addVAT", () => {
  test("adds a VAT of 20% to a price of 100", () => {
    expect(addVAT(100, 20)).toBe(120);
  });

  test("adds a VAT of 17.5% to a price of 40", () => {
    expect(addVAT(40, 17.5)).toBe(47);
  });

  test("adds a VAT of 17.5% to a price of 33.50", () => {
    expect(addVAT(33.5, 17.5)).toBe(39.36);
  });

  test("adds a VAT of 0% to a price of 25", () => {
    expect(addVAT(25, 0)).toBe(25);
  });
  test('first input not a number throws an error', () => {
    expect(() => { 
      addVAT("blah", 2);
      }).toThrowError( new Error("one of the inputs is not a number"));
    });
  test('first input not a number throws an error', () => {
    expect(() => { 
      addVAT(20, null);
      }).toThrowError( new Error("one of the inputs is not a number"));
    });
  test('both undefined throws an error', () => {
    expect(() => { 
      addVAT(undefined, undefined);
      }).toThrowError( new Error("one of the inputs is not a number"));
    });
});

describe("getSalePrice", () => {
  test("reduces a price of 100 by 50%", () => {
    expect(getSalePrice(100, 50)).toBe(50);
  });

  test("reduces a price of 100 by 33.3%", () => {
    expect(getSalePrice(100, 33.3)).toBe(66.7);
  });

  test("reduces a price of 79.99 by 15%", () => {
    expect(getSalePrice(79.99, 15)).toBe(67.99);
  });

  test("reduces a price of 50 by 0%", () => {
    expect(getSalePrice(50, 0)).toBe(50);
  });
});

describe("getMiddleCharacter", () => {
  test("returns the middle character from a string of odd length", () => {
    expect(getMiddleCharacter("bears!!!!")).toBe("s");
  });

  test("returns the middle 2 characters from a string of even length", () => {
    expect(getMiddleCharacter("help!!")).toBe("lp");
  });
});

describe("reverseWord", () => {
  test("returns the provided word, reversed", () => {
    expect(reverseWord("foo")).toBe("oof");
  });

  test("returns a longer sentence, reversed", () => {
    expect(reverseWord("why would you even want to do this?")).toBe(
      "?siht od ot tnaw neve uoy dluow yhw"
    );
  });
});

describe("reverseAllWords", () => {
  test("reverses a single word in an array", () => {
    expect(reverseAllWords(["jest"])).toEqual(["tsej"]);
  });

  test("reverses a multiple words in an array", () => {
    expect(
      reverseAllWords(["jest", "mocha", "rspec", "jasmine", "selenium"])
    ).toEqual(["tsej", "ahcom", "cepsr", "enimsaj", "muineles"]);
  });
});

describe("countLinuxUsers", () => {
  test("returns 0 if no Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Windows 8", type: "Windows" },
      { name: "Paul", OS: "Firefox OS", type: "Unknown" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(0);
  });

  test("returns the correct number of Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Ubuntu 18.04", type: "Linux" },
      { name: "Paul", OS: "Ubuntu 16.04", type: "Linux" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Jane", OS: "Mint 19.1", type: "Linux" },
      { name: "Jen", OS: "CentOS 7", type: "Linux" },
      { name: "David", OS: "Fedora 28", type: "Linux" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(5);
  });
  test('check a non array errors', () => {
    expect(() => { 
      countLinuxUsers(undefined);
      }).toThrowError( new Error("array is required"));
  });
  test('check a non user errors', () => {
    [[2,{ name: "Heather", OS: "Ubuntu 18.04", type: "Linux" }],
    [{ name: "Paul", OS: "Ubuntu 16.04", type: "Linux" },null],
    [undefined,{ name: "David", OS: "Fedora 28", type: "Linux" }],
    [{ name: "Pedro", OS: "Windows 95", type: "Windows" },"brian"]].forEach((item) => {
    expect(() => { 
        countLinuxUsers(item);
        }).toThrowError( new Error("users is required"));
    })
  });
});

describe("getMeanScore", () => {
  test("returns the mean score from an array of scores", () => {
    expect(getMeanScore([8, 9, 7])).toBe(8);
    expect(getMeanScore([88, 86, 93])).toBe(89);
  });

  test("returns the mean to 2 decimal places", () => {
    expect(getMeanScore([24, 44, 56, 11, 12, 17, 34])).toBe(28.29);
  });
  test('check array that is not all numbers errors', () => {
    expect(() => { 
      getMeanScore([10,12,"three",5]);
      }).toThrowError( new Error("input is not all numbers"));
    });
    test('check a non array errors', () => {
      expect(() => { 
        getMeanScore(3);
        }).toThrowError( new Error("input is not array of numbers"));
      });
});

describe("simpleFizzBuzz", () => {
  test("returns 'fizz' if the number is divisible by 3", () => {
    expect(simpleFizzBuzz(3)).toBe("fizz");
  });

  test("returns 'buzz' if the number is divisible by 5", () => {
    expect(simpleFizzBuzz(5)).toBe("buzz");
  });

  test("returns the number if the number is divisible by neither 3 nor 5", () => {
    expect(simpleFizzBuzz(4)).toBe(4);
  });

  test("returns 'fizzbuzz' if the number is divisible by 3 and 5", () => {
    expect(simpleFizzBuzz(15)).toBe("fizzbuzz");
  });
});
describe("test rounded number function", () => {
  test("returns number to 4 decimal places", () =>{
    expect(roundNumber(3.45678,4)).toBe(3.4568);
  });
  test("returns number to 0 decimal places", () =>{
    expect(roundNumber(1000.34567,0)).toBe(1000);
  });
});

