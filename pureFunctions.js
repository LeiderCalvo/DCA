// Función impura
let count = 0;
function increment() {
  count++;
  return count;
}
console.log(increment()); // output: 1
console.log(increment()); // output: 2
console.log(count); // output: 2

// Función pura
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // output: 5
console.log(add(4, 5)); // output: 9

/*The increment() function is an impure function because it relies on a global variable count to do its job and also modifies the state of count. Each time we call increment(), the value of count is incremented and its current value is used to calculate the return value of the function. */

/* On the other hand, the add(a, b) function is a pure function because it doesn't depend on any external state and always returns the same result for the same input arguments. In other words, add(a, b) has no side effects and doesn't modify anything outside of its scope.*/