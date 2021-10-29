import reverseString from "../code/reverseString";

test("reverse a string", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("reverse a sentence", () => {
  expect(reverseString("Hello, world")).toBe("dlrow ,olleH");
});

test("accepts only strings", () => {
  expect(reverseString(1)).toBe("");
});
