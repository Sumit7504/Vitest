import { test, expect, vi } from "vitest";
import { getUserName } from "./user.js";

test("returns mocked user name", () => {
  // Create a mock function
  const mockFetch = vi.fn(() => ({ name: "Sumit" }));

  // Pass mock function instead of real API
  const result = getUserName(mockFetch);

  expect(result).toBe("Sumit");
  expect(mockFetch).toHaveBeenCalled(); // check if mock was used
});
