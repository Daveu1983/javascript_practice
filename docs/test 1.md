davidunderwood@iLtDbd879:~/tech_returners/JSPractice/javascript_practice$ npm run test

> javascript_practice@1.0.0 test /home/davidunderwood/tech_returners/JSPractice/javascript_practice
> clear && jest

[3;J
 PASS  test/week2.test.js
 FAIL  test/week1.test.js
  ● Console

    console.log node_modules/jest-jasmine2/build/jasmine/Env.js:441
        ● Test suite failed to run
      
          A "describe" callback must not return a value.
          Returning a value from "describe" will fail the test in a future version of Jest.
      
            140 | });
            141 | 
          > 142 | describe("countLinuxUsers", () => {
                | ^
            143 |   test("returns 0 if no Linux users found", () => {
            144 |     const users = [
            145 |       { name: "Heather", OS: "Windows 8", type: "Windows" },
      
            at addSpecsToSuite (node_modules/jest-jasmine2/build/jasmine/Env.js:443:15)
            at Object.describe (test/week1.test.js:142:1)
      

  ● countLinuxUsers › encountered a declaration exception

    expect(received).toThrowError(expected)

    Expected message: "users is required"
    Received message: "array is required"

          58 | 
          59 | function countLinuxUsers(users) {
        > 60 |   if (!(Array.isArray(users))) throw new Error("array is required");
             |                                      ^
          61 |   users = users.filter(function (user){
          62 |     if (typeof user !== 'object'){
          63 |       throw new Error ("users is required")

          at countLinuxUsers (challenges/week1.js:60:38)
          at countLinuxUsers (test/week1.test.js:172:9)
          at Object.<anonymous> (node_modules/expect/build/toThrowMatchers.js:81:11)
          at Object.throwingMatcher [as toThrowError] (node_modules/expect/build/index.js:336:33)
          at toThrowError (test/week1.test.js:173:12)
              at Array.forEach (<anonymous>)
          at Suite.forEach (test/week1.test.js:170:63)
          at Object.describe (test/week1.test.js:142:1)

      171 |     expect(() => { 
      172 |         countLinuxUsers(item);
    > 173 |         }).toThrowError( new Error("users is required"));
          |            ^
      174 |   })));  
      175 | });
      176 | 

      at toThrowError (test/week1.test.js:173:12)
          at Array.forEach (<anonymous>)
      at Suite.forEach (test/week1.test.js:170:63)
      at Object.describe (test/week1.test.js:142:1)

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 52 passed, 53 total
Snapshots:   0 total
Time:        3.572s
Ran all test suites.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! javascript_practice@1.0.0 test: `clear && jest`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the javascript_practice@1.0.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/davidunderwood/.npm/_logs/2019-04-02T18_25_28_632Z-debug.log

