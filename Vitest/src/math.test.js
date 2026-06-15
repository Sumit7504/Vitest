import { test, expect } from "vitest";
import { add } from "./math.js";

test("add two positive number", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds a positive and negative number", () => {
  expect(add(10, -4)).toBe(6);
});

test("adds zeros correctly", () => {
  expect(add(0, 0)).toBe(0);
});
