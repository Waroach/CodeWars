function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    
}


console.log(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible.');
console.log(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter.');
console.log(isNaN(remainder(1, 0)), 'Divide by zero should return NaN');
console.log(isNaN(remainder(0, 0)), 'Divide by zero should return NaN');



/*
https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript



Task
Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number.
Division by zero should return NaN. (
Example
remainder(17, 5) -> 2
remainder(13, 72) -> remainder(72,13) -> 7 (The larger number should divide the smaller number)
remainder(1, 0) -> NaN (Division by 0)
remainder(0, 0) -> NaN (Divison by 0)
Input
Arguments will both be integers: positive, negative, or neutral (0)
*/