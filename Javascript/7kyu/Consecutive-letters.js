                            // I am not sure if this will work...
const solve = s => 'abcdefghijklmnopqrstuvwxyz'.includes(s.split('').sort().join(''))

                            // Same as above
// function solve(s){
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     return alphabet.includes(s.split('').sort().join(''))
// }


                            // First Try working
// function solve(s){
//     s = s.split('').sort().join('')
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     return alphabet.includes(s)
// }


                            // PSEUDOCODE
    // are each letter consecutive or adjacent in the alphabet
    // letters accur only once.

    //sort the string.
    // check if it contains any doubles charecters
    // check if the string is contained in the alphabet.
        // create a alphebit string to check against.


console.log(solve("abc"),true);
console.log(solve("abd"),false);
console.log(solve("dabc"),true);
console.log(solve("abbc"),false);


/*
https://www.codewars.com/kata/5ce6728c939bf80029988b57/train/javascript


In this Kata, we will check if a string contains consecutive letters
as they appear in the English alphabet and if each letter occurs only once.
Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.
For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True
All inputs will be lowercase letters.
More examples in test cases. Good luck!
*/