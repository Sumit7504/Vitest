import { test, expect } from "vitest";
import { divide } from "./divide.js";

test("divides numbers correctly", () => {
  expect(divide(10, 2)).toBe(5);
});

test("throws error when dividing by zero", () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
