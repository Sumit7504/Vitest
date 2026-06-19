# Coverage Reports

Coverage reports show how much of your code is tested. They measure which lines, functions, and branches are executed during tests, helping you identify untested parts of your project.

Coverage answers: “How much of my code is actually tested?”

Statements → Did all lines run?
Branches → Did all if/else paths run?
Functions → Were all functions called?
Lines → Which exact lines were executed?

Helps ensure you don’t miss critical logic in your tests.
Vitest uses c8 (built-in) to generate coverage reports.

# Run coverage

command --> npx vitest --coverage
