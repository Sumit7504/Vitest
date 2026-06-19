import { test, expect } from "vitest";
import { delay } from "./delay.js";

test("resolves after given time", async () => {
  const result = await delay(100);
  expect(result).toBe("done");
});

test("resolves using promises", () => {
  return delay(50).then((result) => {
    expect(result).toBe("done");
  });
});
