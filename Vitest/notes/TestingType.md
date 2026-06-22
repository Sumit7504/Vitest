# Unit Testing

Testing the smallest piece of code (like a function or component) in isolation.
Goal: Verify that one unit works correctly on its own.
Imagine you have a function that adds two numbers:

```
function add(a, b) {
return a + b;
}
```

A unit test checks only this function:

```
test('adds numbers correctly', () => {
expect(add(2, 3)).toBe(5);
});
```

# Function Testing

Testing a specific function or feature of your application.
Goal: Ensure that the function behaves as expected with different inputs.
Suppose you have a login function:

```
function login(username, password) {
if (username === 'sumit' && password === '123') {
return 'success';
}
return 'fail';
}
```

A function test would check multiple cases:

```
test('login works with correct credentials', () => {
expect(login('sumit', '123')).toBe('success');
});

test('login fails with wrong credentials', () => {
expect(login('sumit', 'wrong')).toBe('fail');
});
```

# Integration Testing

Testing how different units/functions work together.
Goal: Verify that combined parts of the system interact correctly.

login() function
getDashboard() function
An integration test checks the flow:

```
test('user can log in and see dashboard', () => {
const result = login('sumit', '123');
expect(result).toBe('success');

const dashboard = getDashboard(result);
expect(dashboard).toContain('Welcome Sumit');
});
```
