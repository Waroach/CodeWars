function alphabetized(s) {
    return s.split(' ').join('').split('').sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'})).join('')
}

console.log(alphabetized('The Holy Bible'), 'BbeehHilloTy')


/*
https://www.codewars.com/kata/5970df092ef474680a0000c9/train/javascript


The alphabetized kata
Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order.
Whitespace and punctuation shall simply be removed!
The input is restricted to contain no numerals and only words containing the english alphabet letters.
Example:
alphabetized("The Holy Bible") // "BbeehHilloTy"
Inspired by Tauba Auerbach
*/