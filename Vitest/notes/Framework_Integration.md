Framework integration means using Vitest together with libraries like React Testing Library or Vue Test Utils to test components, not just plain functions

Functions are easy to test, but components involve UI rendering, props, and events.

Vitest integrates smoothly with frameworks so you can:

Render components in a test environment.
Simulate user interactions (clicks, typing).
Assert that the UI updates correctly.

Common integrations:

React → React Testing Library (@testing-library/react)
Vue → Vue Test Utils (@vue/test-utils)
Angular → Angular Testing utilities

Simple Component - tsx

```
import React from 'react';

export function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}
```

Test with Vitest + React Testing Library

```
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Greeting } from './Greeting';

test('renders greeting with name', () => {
  render(<Greeting name="Sumit" />);

  // Find element by text
  const heading = screen.getByText('Hello, Sumit!');

  // Assert it exists in the document
  expect(heading).toBeInTheDocument();
});
```
