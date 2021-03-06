const sumEvenNumbers=input=>input.reduce((a,e)=>e%2==0?a+=e:a,0)

                            // Found on codewars
// const sumEvenNumbers = a => a.reduce((r, e) => r + (e % 2 ? 0 : e), 0);

                            // First Try
// function sumEvenNumbers(input) {
//     let evenTotal = 0, oddTotal = 0;
//     input.forEach(n=>n%2==0?evenTotal+=n:oddTotal+=n)
//     return evenTotal
// }

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),30,)

/*
https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript


Complete the function that takes a sequence of numbers as single parameter.
Your function must return the sum of the even values of this sequence.
Only numbers without decimals like 4 or 4.0 can be even.
The input is a sequence of numbers: integers and/or floats.
Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/