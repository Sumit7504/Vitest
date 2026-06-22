# Optimization Strategies

Optimization means adjusting how Vitest runs so that tests finish quickly, use fewer resources, and scale well in large projects.

In small projects, tests run instantly.
In big apps, thousands of tests can slow down development.
Optimization ensures tests stay fast, reliable, and developer‑friendly.

- Run Tests in Parallel
  Vitest runs tests concurrently by default.
  Use --threads to control worker threads.

npx vitest --threads=4

- Isolate Test Environments
  Prevent shared state between tests.

In vitest.config.ts:
test: {
isolate: true,
}

- Use --changed for Faster Runs
  Run only tests affected by recent changes.

npx vitest --changed

- Split Test Suites
  Organize tests into categories (unit, integration, e2e).

Example scripts in package.json:
"scripts": {
"test:unit": "vitest run src/unit",
"test:integration": "vitest run src/integration"
}

- Cache Dependencies
  Vitest caches results to avoid re‑running unchanged tests.

Keep your node_modules/.vitest cache folder.

- Optimize Coverage
  Coverage slows tests. Run it separately:

bash
npm run test
npm run test:coverage
