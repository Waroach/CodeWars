function stringTransformer(str) {
    return str.split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(l=>l===l.toUpperCase()?l.toLowerCase():l.toUpperCase())
    .join('')
}


// Old but works
// function stringTransformer(str) {
//     const allUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     return str.split('')
//     .map(c => allUpperCase.indexOf(c) === -1 ? c.toUpperCase() : c.toLowerCase())
//     .join('').split(' ').reverse().join(' ')
// }

console.log(stringTransformer('Example tESt stRing'), '--STrING TesT eXAMPLE--')

/*
This needs to be worked on.

Given a string, return a new string that has transformed based on the input:
Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.
For example:
"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/