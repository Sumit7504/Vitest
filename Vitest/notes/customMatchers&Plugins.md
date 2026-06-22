# Custom Matchers & Plugins

Custom matchers → your own rules for expect().
Plugins → ready‑made extensions that add new matchers or utilities.

Sometimes the built‑in matchers (toBe, toEqual, toContain) aren’t enough.
Example: you want to check if a number is “close enough” (within tolerance).
Plugins like @testing-library/jest-dom add matchers for DOM testing (e.g., toBeVisible, toHaveAttribute).

- Custom Matcher

```
import { expect } from 'vitest';

expect.extend({
  toBeNear(received, expected, tolerance = 0.1) {
    const pass = Math.abs(received - expected) <= tolerance;
    if (pass) {
      return {
        pass: true,
        message: () => `expected ${received} not to be near ${expected}`,
      };
    } else {
      return {
        pass: false,
        message: () => `expected ${received} to be near ${expected}`,
      };
    }
  },
});
```

- Use in Test

```
test('checks approximate value', () => {
  expect(3.14).toBeNear(3.1415, 0.01);
});
```

- Plugin (@testing-library/jest-dom)

install

```
npm install -D @testing-library/jest-dom
```

setup in vitest.config,ts

```
test: {
  setupFiles: ['./setupTests.ts'],
}
```

Add Setup File

```
// setupTests.ts
import '@testing-library/jest-dom';
```

Use in Test

```
test('button is visible', () => {
  render(<button>Click Me</button>);
  expect(screen.getByText('Click Me')).toBeVisible();
});
```
