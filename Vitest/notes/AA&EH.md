# Advanced Assertions & Error Handling

Advanced assertions go beyond simple equality checks. They let you test for errors, specific conditions, and more complex behaviors.

Sometimes you need to check if a function throws an error.
Or verify that an object contains certain properties.

Vitest provides powerful matchers like:

toThrow() → check if a function throws an error.
toContain() → check if an array/string contains a value.
toMatchObject() → check if an object matches a subset of properties.
toBeTruthy() / toBeFalsy() → check truthy/falsy values.

```
test("array contains value", () => {
  expect([1, 2, 3]).toContain(2);
});

test("object matches subset", () => {
  expect({ name: "Sumit", age: 25 }).toMatchObject({ name: "Sumit" });
});

test("truthy/falsy checks", () => {
  expect("hello").toBeTruthy();
  expect("").toBeFalsy();
});
```
