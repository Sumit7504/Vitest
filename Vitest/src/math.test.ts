import { test, expect } from "vitest";
import { add } from "./math";

test("adds two numbers", () => {
  const result: number = add(2, 3);
  expect(result).toBe(5);
});
