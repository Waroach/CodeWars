
                            // Created a one Liner
squareDigits=num=>Number(String(num).split('').map(e=>Math.pow(Number(e),2)).join(''))


                            // FIRST TRY || WORKING
// function squareDigits(num){
//     return Number(String(num).split('').map(e=>Math.pow(Number(e),2)).join(''))
// }



                            // PSEUDOCODE
// seperate each digit
    // Might need to turn into a string first....
// take each digit and square it
// concat or join the squared results.
// if not a number turn back into a number.
// return the result



console.log(squareDigits(3212), 9414)
console.log(squareDigits(2112), 4114)
console.log(squareDigits(0), 0)



/*
https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript


Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/