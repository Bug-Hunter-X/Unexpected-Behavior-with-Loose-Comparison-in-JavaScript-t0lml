function foo(a) {
  if (a === null) {
    return 1;
  } else if (a === undefined) {
    return 1;
  } else if (a === 0) {
    return 2;
  } else {
    return 2; //Handle other cases appropriately.
  }
}

console.log(foo(null)); // Output: 1
console.log(foo(undefined)); // Output: 1
console.log(foo(0)); // Output: 2