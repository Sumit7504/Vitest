# E2E Testing

End‑to‑end (E2E) testing means simulating a real user’s journey in the browser — opening pages, clicking buttons, filling forms, and checking results.

Unit tests check small pieces of code.
E2E tests check the whole app flow.
Example: logging in, adding an item to cart, checking out.
Tools like Playwright and Cypress automate browsers for this.

# Playwright + Vitest

npm install -D @playwright/test

- test

```
// login.e2e.js
import { test, expect } from '@playwright/test';

test('user can log in', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('#username', 'sumit');
  await page.fill('#password', '123456');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('http://localhost:3000/dashboard');
});
```

This test opens the login page, fills the form, clicks submit, and checks if the user lands on the dashboard.

# Cypress + Vitest

npm install -D cypress

```
// cypress/e2e/login.cy.js
describe('Login flow', () => {
  it('logs in successfully', () => {
    cy.visit('/login');
    cy.get('#username').type('sumit');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
```
