function stray(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == numbers[i + 1]) return numbers[numbers.length - 1];
    else return numbers[0];
  }
}

console.log(stray([1, 1, 2]), 2);
console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);
console.log(stray([17, 17, 11, 17, 17, 17, 17]), 11);
console.log(stray([17, 17, 18, 17, 17, 17, 17]), 18);

// PSEUDOCODE
// First grab the group of numbers and arrange them smallest to largest
// Check to see if the first two numbers match
// if so return the last number
// if not return the first number

/*
https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript


You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)
Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/
