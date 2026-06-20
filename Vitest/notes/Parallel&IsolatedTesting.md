# Parallel & Isolated Testing

Parallel testing → multiple tests run at the same time to speed up execution.

Isolated testing → each test runs in its own environment so they don’t interfere with each other.

By default, Vitest runs tests concurrently for performance.

Each test file is isolated: variables, mocks, and state don’t leak between files.

You can control concurrency and isolation with options like:

--threads → number of worker threads.
--single-thread → run tests sequentially.
--isolate → ensure each test file has its own environment.

- Parallel Test

```
import { test, expect } from 'vitest';

test('adds numbers', () => {
  expect(2 + 3).toBe(5);
});

test('multiplies numbers', () => {
  expect(2 * 3).toBe(6);
});
```

Both tests can run at the same time since they don’t depend on each other.

- Isolated Test

```
  import { test, expect } from 'vitest';

let counter = 0;

test('increments counter', () => {
counter++;
expect(counter).toBe(1);
});

test('resets counter', () => {
counter = 0;
expect(counter).toBe(0);
});
```

Without isolation, shared state (counter) could cause flaky results.
Vitest ensures each test file runs in a fresh environment, so state doesn’t leak.
