function findUniq(arr) {
    // do magic
}

console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);
console.log(findUniq([ 3, .55, 3, 3, 3 ]), .55);
console.log(findUniq([ 10, 3, 3, 3, 3, 3 ]), 10);


/*
https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript


There is an array with some numbers.
All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.
This is the first kata in series:
Find the unique number (this kata)
Find the unique string
Find The Unique
*/