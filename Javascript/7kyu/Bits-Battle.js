function bitsBattle(numbers) {
    return ; //code here
}



                            // PSEUDOCODE
// first sort the numbers
// if the length of number array is odd 
    // if the middle number is odd then 'odds win'
    // otherwise 'evens win'
// if the middle two numbers are both odd then 'odds win'
// if the middle two numbers are both even then 'evens win'
// otherwise its a 'tie'



console.log(bitsBattle([5, 3, 14]), 'odds win');
console.log(bitsBattle([3, 8, 22, 15, 78]), 'evens win');
console.log(bitsBattle([]), 'tie');
console.log(bitsBattle([1, 13, 16]), 'tie');



/*
https://www.codewars.com/kata/58856a06760b85c4e6000055/train/javascript


The odd and even numbers are fighting against each other!
You are given a list of positive integers.
The odd numbers from the list will fight using their 1 bits from their binary representation,
while the even numbers will fight using their 0 bits.
If present in the list, number 0 will be neutral, hence not fight for either side.
You should return:
odds win if number of 1s from odd numbers is larger than 0s from even numbers
evens win if number of 1s from odd numbers is smaller than 0s from even numbers
tie if equal, including if list is empty
Please note that any prefix that might appear in the binary representation,
e.g. 0b, should not be counted towards the battle.
Example:
For an input list of [5, 3, 14]:
odds: 5 and 3 => 101 and 11 => four 1s
evens: 14 => 1110 => one 0
Result: odds win the battle with 4-1
If you enjoyed this kata, you can find a nice variation of it here.
*/