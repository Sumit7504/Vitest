# Vitest: Async Testing

Async testing is the process of testing functions that use asynchronous operations (like Promises, async/await, or timers). It ensures your code works correctly even when tasks don’t finish immediately.

In JavaScript, many operations are asynchronous (API calls, timers, file reads).

Tests must wait for these operations to finish before checking results.

Vitest supports async testing with:

Returning a Promise

Using async/await

Using callbacks like done() (rarely needed)
