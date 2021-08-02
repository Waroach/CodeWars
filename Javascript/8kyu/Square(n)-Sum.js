//          First Try
//const squareSum = numbers => numbers.reduce((a,c) => a + (c*c), 0)

// Cleaned up version
squareSum=n=>n.reduce((a,c)=>a+Math.pow(c,2),0)

// function squareSum(numbers){
//     return numbers.reduce((total,number)=>Math.pow(number,2)+total,0)
// }

console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)
console.log(squareSum([3, 6, 7, 8]))
console.log(squareSum([5, 7, 8, 2, 9, 3, 0]))

/*
https://www.codewars.com/kata/515e271a311df0350d00000f


Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/