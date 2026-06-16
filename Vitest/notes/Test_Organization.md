# describe()

describe() is used to group related tests together under a common heading. It helps organize test suites and makes output easier to read.

- Think of describe() as a folder for tests.
- You can put multiple test() blocks inside one describe().
- Useful when testing a single function, module, or feature with multiple scenarios.

# Hooks (beforeEach, afterEach)

Hooks are special functions that run before or after each test inside a describe() block.

- beforeEach: Runs before every test.
- afterEach: Runs after every test.

- Explanation
  They are used for setup and cleanup.
  Example: resetting a counter, clearing a database, or re-initializing state before each test.
  Prevents tests from interfering with each other.
