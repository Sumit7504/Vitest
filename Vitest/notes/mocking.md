# Mocking

Mocking is the practice of replacing real functions, modules, or APIs with fake versions during testing, so you can control their behavior and test your code in isolation.

In real projects, functions often depend on external services (like APIs, databases, or libraries).

If you test them directly, results may vary (slow network, unavailable service).

- Mocking solves this by creating fake versions of those dependencies.

- Vitest provides tools like vi.fn(), vi.spyOn(), and vi.mock() to create mocks.

- vi.spyOn
  Useful when you want to test side effects (like logging, API calls, or utility functions).

You don’t need to rewrite the function — you just watch it.
You can also override its return value for testing.
