const testit = s => (s.match(/w.*?o.*?r.*?d/ig) || []).length


                            // Regex short version
// function testit(s) {
//     return (s.match(/w.*?o.*?r.*?d/ig) || []).length
// }


                            // Long Version
// function testit(s){
//     s = s.split('')
//     let count = 0
//     let word = ''
//     for(let i=0;i<s.length;i++){
//         if(s[i].toLowerCase() === 'w' && word === '') word = 'w'
//         if(s[i].toLowerCase() === 'o' && word === 'w') word = 'wo'
//         if(s[i].toLowerCase() === 'r' && word === 'wo') word = 'wor'
//         if(s[i].toLowerCase() === 'd' && word === 'wor'){
//             word = ''
//             count ++
//         }
//     }
//     return count
// }


                            // First try with psudoCode
// function testit(s){
//     s = s.split('')
//     // how many times does the WORD 'word' show up?
//     // no matter how many letters in the middle.
//     let count = 0
//     let word = ''
//     // go thru each letter and see how many times you can spell word.
//     // if word is spelled count goes up
//     for(let i=0;i<s.length;i++){
//         // console.log('Letter', s[i])
//         // if(regex.test(s[i]))console.log(s[i])
//         if(s[i].toLowerCase() === 'w' && word === '') word = 'w'
//         if(s[i].toLowerCase() === 'o' && word === 'w') word = 'wo'
//         if(s[i].toLowerCase() === 'r' && word === 'wo') word = 'wor'
//         if(s[i].toLowerCase() === 'd' && word === 'wor'){
//             word = ''
//             count ++
//         }
//     }
//     return count
// }


console.log(testit("word"), 1, "");
console.log(testit("hello world"), 1, "");
console.log(testit("I love codewars."), 0, "");
console.log(testit("My cat waiting for a dog."), 1, "");
console.log(testit("We often read book, a word hidden in the book."), 2, "");
console.log(testit("When you in order to do something by a wrong way, your heart will missed somewhere."), 2, "");
console.log(testit("This sentence have one word."), 1, "");
console.log(testit("This sentence have two word, not one word."), 2, "");
console.log(testit("One word + one word = three word ;-)"), 3, "");
console.log(testit("Can you find more word for me?"), 1, "");


/*
https://www.codewars.com/kata/56eff1e64794404a720002d2/train/javascript


No Story
No Description
Only by Thinking and Testing
Look at result of testcase, guess the code!
*/