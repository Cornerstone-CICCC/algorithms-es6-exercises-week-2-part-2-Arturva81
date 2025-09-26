// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

let numbers = [1, 2, 3, -4, 5];

let positive = numbers.every((number) => number > 0);

console.log(positive);