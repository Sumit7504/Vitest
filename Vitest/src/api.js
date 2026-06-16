import axios from "axios";

export async function fetchUser() {
  const response = await axios.get("/user");
  return response.data;
}
