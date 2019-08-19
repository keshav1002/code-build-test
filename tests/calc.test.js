const calc = require("../lib/calc");

test('Adding two numbers', () => {
    expect(calc.addTwoNumbers(1, 2)).toBe(3);
});