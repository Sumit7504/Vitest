import { test, expect } from "vitest";
import { add } from "../notes/coverage.js";

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
