// COMPLETED
// I had to look this up. I consider this to be bad code.
// Only due to it not being readable.
f=n=>"0o"+n-0

                            // Still too long
// This is readable code!
// f=n=>parseInt(n,8)

                            // WORKING but too long
// const f=n=> parseInt(n,8)

                            // First try with lots of chars
// function f(n){
//     return parseInt(n,8)
// }



                            // PSEUDOCODE
// convert string into a number
// and get the decimal reprresentation
// use less then 15 chars



console.log(f("2"), 2, "Oops! The output should be 2")
console.log(f("31"), 25, "Oops! The output should be 25")
console.log(f("1457"), 815, "Oops! The output should be 815")
console.log(f("53275320260735355325703124536"), 104862069400837536141322590, "Oops! The output should be 104862069400837536141322590")



/*
https://www.codewars.com/kata/6173bba47e5aa0000f86b76b/train/javascript


You have to write a function f which takes in an octal numberin string
format and output its decimal representation in less than 15 characters.
*/