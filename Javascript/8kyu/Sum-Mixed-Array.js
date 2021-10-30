                    // Optimized
sumMix=x=>x.reduce((a,c)=>a+Number(c),0)

                    // First Try
// function sumMix(x){
//     // grab each item from the array
//     let total = 0
//     for(i=0;i<x.length;i++){
//       // check if it is a number and or turn into a number
//         total += Number(x[i])
//       // sum to accumalitve total
//     }
//     // return that total as a number
//     return total
// }



console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 



/*
https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/