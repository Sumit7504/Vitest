export function getUserName(fetchFn) {
  // fetchFn simulates an API call
  const user = fetchFn();
  return user.name;
}
