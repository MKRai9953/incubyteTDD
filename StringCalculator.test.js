const { add } = require("./StringCalculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number for a single value", () => {
  expect(add("1")).toBe(1);
});

test("adding two different number (non-zero)", () => {
  expect(add("1,2")).toBe(3);
});

test("adding three different number (non-zero)", () => {
  expect(add("1,2,3")).toBe(6);
});

test("handles newlines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("single-character delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws on negative numbers with correct message", () => {
  expect(() => add("1,-2,3,-4")).toThrow(
    "negative numbers not allowed: -2, -4"
  );
});