The vitest.config.ts file is just a settings file for Vitest.
Think of it like the “preferences” menu in an app — you tell Vitest how you want tests to run.

Imagine you’re building a React app:

Some tests need a browser‑like environment (DOM).
You want path shortcuts so you don’t write long imports.
You want coverage reports to check how much code is tested.

Instead of repeating these settings every time, you put them in one place: vitest.config.ts.

```
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // simulates browser DOM for React/Vue tests
    globals: true,        // lets you use test() and expect() without imports
    coverage: {
      reporter: ['text', 'html'], // see coverage in terminal + browser report
      lines: 80,                  // fail if coverage < 80%
    },
  },
  resolve: {
    alias: {
      '@': '/src', // now you can import like: import Button from '@/components/Button'
    },
  },
});
```
