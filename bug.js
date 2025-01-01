function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10

//The bug is that the function does not explicitly handle cases where either 'a' or 'b' is undefined.  Javascript's loose typing will cause an implicit type coercion, leading to unexpected results.

console.log(foo(undefined,5)); //Output: NaN
console.log(foo(5,undefined)); //Output: NaN