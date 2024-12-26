// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum % 2 === 0 ? "even" : "odd";
}

// Handle Empty Array:

// The reduce function uses 0 as the initial value for the accumulator, so an empty array will sum to 0.
// Sum of Elements:

// The reduce function calculates the sum of all elements in the array efficiently.
// Determine Even or Odd:

// Use the modulo operator (%) to check if the sum is divisible by 2:
// If sum % 2 === 0, return "even".
// Otherwise, return "odd".

console.log(oddOrEven([0])); // "even"
console.log(oddOrEven([0, 1, 4])); // "odd"
console.log(oddOrEven([0, -1, -5])); // "even"
console.log(oddOrEven([])); // "even"
console.log(oddOrEven([1, 2, 3])); // "even"
