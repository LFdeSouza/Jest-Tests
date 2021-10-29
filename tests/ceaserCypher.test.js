import ceasarCypher from "../code/ceasarCypher";

test("gives correct values", () => {
  expect(ceasarCypher("abcde", 1)).toBe("bcdef");
});

test("cicles the alphabet", () => {
  expect(ceasarCypher("xyz", 1)).toBe("yza");
});

test("works with uppercase letters", () => {
  expect(ceasarCypher("XyZ", 2)).toBe("ZaB");
});

test("works with punctuation", () => {
  expect(ceasarCypher("Xy,Z.", 2)).toBe("Za,B.");
});
