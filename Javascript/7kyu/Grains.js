                            // Final Answer
const square=n=> Math.pow(2, n-1)


                            // Cleaned up a little
// function square(number){
//     let total = 1
//     while(number > 1){
//         total *= 2
//         number--
//     }
//     return total
// }


                            // Frist Try || It Works.
// function square(number){
//     let total = 1
//     if(number === 1) return total
//     while(number > 1){
//         total *= 2
//         number--
//     }
//     return total
// }


console.log(square(1), 1);
console.log(square(3), 4);
console.log(square(4), 8);
console.log(square(16), 32768);
console.log(square(32), 2147483648);

/*
https://www.codewars.com/kata/55f7eb009e6614447b000099/train/javascript


Grains
Write a program that calculates the number of grains of wheat on a specific
square of chessboard given that the number on each square is double the previous one.
There are 64 squares on a chessboard.
#Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...
Write a program that shows how many grains were on each square.
*/