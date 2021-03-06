                            // Created a One Liner
isDigit = s => parseFloat(s) == s


                            // First Try
// function isDigit(s) {
//     return parseFloat(s) == s
// }



// PSEUDOCODE
// first we need to take the string and convert it into a Floating Integer
    // Number() will not work
// then compare it to the string.
// return the result.



/*
https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript


Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
Valid examples, should return true:
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
*/