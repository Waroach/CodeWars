function lettersToNumbers(s) {
    //your code......
}

console.log(lettersToNumbers("I Love You"), 170);
console.log(lettersToNumbers("ILoveYou"), 170);
console.log(lettersToNumbers("ARE YOU HUNGRY?"), 356);
console.log(lettersToNumbers("oops, i did it again!"), 152);
console.log(lettersToNumbers("Give me 5!"), 73);
console.log(lettersToNumbers("Give me five!"), 110);


/*
https://www.codewars.com/kata/5970fce80ed776b94000008b/train/javascript


Sentence Calculator
Calculate the total score (sum of the individual character scores) of a
sentence given the following score rules for each allowed group of characters:
1) Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
2) Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
3) Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
4) Other characters: 0 value
Note: input will always be a string
*/