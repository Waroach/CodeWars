function oddOrEven(n) {
    return ODD || EVEN || EITHER ;
}



                            // PSEUDOCODE
// create a variable called sum set it to 0
// create a loop that adds to sum each time it loops counting up.
// test the total of sum if the number is odd or even
// if sum is 1 return either.



console.log( oddOrEven(1), EITHER );
console.log( oddOrEven(6), ODD );
console.log( oddOrEven(8), EVEN );



/*
https://www.codewars.com/kata/619f200fd0ff91000eaf4a08/train/javascript


Task
Given a number N, determine if the sum of N consecutive numbers is odd or even.
If the sum is definitely an odd number, return Odd.
If the sum is definitely an even number, return Even.
If the sum can be either odd or even ( depending on which first number you choose ), return Either.
Examples
Odd_or_Even(1) should return Either, because the sum can be odd or even.
Odd_or_Even(6) should return Odd, because 6 consecutive numbers contain 3 odd and 3 even numbers, so their sum is always odd.
Odd_or_Even(8) should return Even, because 8 consecutive numbers contain 4 odd and 4 even numbers, so their sum is always even.
Note
const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either";
is Preloaded.
*/