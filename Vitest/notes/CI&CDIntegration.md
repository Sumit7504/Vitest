# CI/CD Integration

- CI/CD integration means setting up Vitest to run automated tests whenever you push code, open a pull request, or deploy your project.
- CI (Continuous Integration) → runs tests automatically when code changes are pushed.
- CD (Continuous Deployment/Delivery) → ensures only tested code gets deployed.
- Vitest fits perfectly into CI/CD pipelines because it’s fast and works with Node.js projects.

Common platforms:

GitHub Actions
GitLab CI/CD
Jenkins
Azure DevOps

- Why It’s Important
  Ensures every commit is tested before merging.
  Prevents broken code from reaching production.
  Provides automation and confidence in your workflow.

# Setup Guide (GitHub Actions Example)

1. Install Vitest
   npm install -D vitest

2. Add Scripts in package.json
   "scripts": {
   "test": "vitest",
   "test:coverage": "vitest --coverage"
   }

3. Create Workflow File
   Make a file at .github/workflows/test.yml (the file name is test.yml, but it must be inside .github/workflows/):

```
name: Run Vitest Tests

on:
push:
branches: [ main ]
pull_request:
branches: [ main ]

jobs:
test:
runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run Vitest
        run: npm run test:coverage
```

- How It Works
  GitHub looks for workflow files in .github/workflows/.
  When you push or open a PR, this workflow runs automatically.
  It installs dependencies and runs your Vitest tests.
  Results appear in the Actions tab of your repo.

- With this setup, your tests run automatically on every push or pull request.
