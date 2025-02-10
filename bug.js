function foo(a) {
  if (a == null) {
    return 1;
  }
  return 2;
}

console.log(foo(null)); // Output: 1
console.log(foo(undefined)); // Output: 1
console.log(foo(0)); // Output: 2