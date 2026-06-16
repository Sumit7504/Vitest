import { test, expect, vi } from "vitest";
import { fetchUser } from "./api.js";
import axios from "axios";

// Step 1: Mock the axios module
vi.mock("axios");

test("fetchUser returns mocked data", async () => {
  // Step 2: Define what axios.get should return
  axios.get.mockResolvedValue({ data: { name: "Sumit" } });

  // Step 3: Call the function
  const user = await fetchUser();

  // Step 4: Check the result
  expect(user).toEqual({ name: "Sumit" });
  expect(axios.get).toHaveBeenCalledWith("/user");
});
