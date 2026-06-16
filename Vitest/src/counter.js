// Use Hooks (beforeEach, afterEach)

export function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    reset() {
      count = 0;
    },
    getValue() {
      return count;
    },
  };
}
