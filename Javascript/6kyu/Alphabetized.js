                            // This was found online.
function alphabetized(s) {
    var ans="";
    for (var i=97; i<123; ++i)
        for (var j=0; j<s.length; j++)
        if (s[j].toLowerCase().charCodeAt()==i)
        ans+=s[j]
    return ans
}

                            // All Below seem to NOT WORK

                            // One Liner
// const alphabetized = s => s.split(' ').join('').split('').sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'})).join('')


                            // Alternative way
// function alphabetized(s) {
//     return s.split(' ').join('').split('').sort(function (a, b) {
//         return a.toLowerCase().localeCompare(b.toLowerCase());
//     }).join('')
// }


                            // First Try
// function alphabetized(s) {
//     return s.split(' ').join('').split('').sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'})).join('')
// }


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