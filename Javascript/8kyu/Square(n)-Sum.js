// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

const squareSum = numbers => numbers.reduce((a,c) => a + (c*c), 0)

// function squareSum(numbers){
//     return numbers.reduce((total,number)=>Math.pow(number,2)+total,0)
// }

console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)