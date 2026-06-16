import { test, expect, vi } from "vitest";
import { greet } from "./logger.js";

test("logs greeting to console", () => {
  // Spy on console.log
  const spy = vi.spyOn(console, "log");

  greet("Sumit");

  // Check if console.log was called
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith("Hello, Sumit!");

  // Restore original console.log
  spy.mockRestore();
});
