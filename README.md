# JavaScript Loose Typing Bug

This repository demonstrates a common JavaScript bug related to loose typing and the handling of undefined values.

The `foo` function adds two numbers. It correctly handles `null` values but fails to explicitly handle `undefined` values. This leads to `NaN` (Not a Number) results, which are unexpected and can be difficult to debug.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version of the function that handles both `null` and `undefined` values gracefully.

## How to reproduce

1. Clone the repository.
2. Run `bug.js` using Node.js (or your preferred JavaScript runtime).
3. Observe the `NaN` results.
4. Run `bugSolution.js` and see the corrected output.

## Lessons learned

* Always explicitly handle `undefined` and `null` values in JavaScript functions to avoid unexpected behavior.
* Be aware of JavaScript's loose typing and how it can lead to implicit type coercion and errors.
* Thorough testing is crucial for preventing these kinds of bugs.