import calculator from "../code/calculator";

test("only accepts numbers", () => {
  expect(calculator.add("1", "1")).toBe("ERROR");
});

test("Sum of 1 + 1 = 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("Subtraction 1 -1  = 0", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test("multiplication 2 * 2  = 4", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("division 2/2", () => {
  expect(calculator.divide(2, 2)).toBe(1);
});
