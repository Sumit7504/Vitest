// src/counter.test.js
import { describe, test, expect, beforeEach } from "vitest";
import { createCounter } from "./counter.js";

let counter;

describe("counter functionality", () => {
  beforeEach(() => {
    counter = createCounter(); // fresh counter before each test
  });

  test("starts at 0", () => {
    expect(counter.getValue()).toBe(0);
  });

  test("increments correctly", () => {
    counter.increment();
    expect(counter.getValue()).toBe(1);
  });

  test("resets correctly", () => {
    counter.increment();
    counter.reset();
    expect(counter.getValue()).toBe(0);
  });
});
