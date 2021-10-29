import capitalize from "../code/capitalize";

test("Capitalize hello, world", () => {
  expect(capitalize("hello, world")).toBe("Hello, world");
});

test("Only accepts strings", () => {
  expect(capitalize(1)).toBe("");
});

test("Don't modify already capitalized strings", () => {
  expect(capitalize("Hello, world")).toBe("Hello, world");
});
