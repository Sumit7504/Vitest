import { describe, test, expect } from "vitest";
import { add } from "./math.js";

// test and expect

// test("add two positive number", () => {
//   expect(add(1, 2)).toBe(3);
// });

// test("adds a positive and negative number", () => {
//   expect(add(10, -4)).toBe(6);
// });

// test("adds zeros correctly", () => {
//   expect(add(0, 0)).toBe(0);
// });

// describe - group heading (add function) with all tests listed under it.

describe("add function", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds a positive and negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds zeros correctly", () => {
    expect(add(0, 0)).toBe(0);
  });
});
