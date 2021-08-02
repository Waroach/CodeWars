// Complete the solution so that it reverses all of the words within the string passed in.
                            // First Try
// function reverseWords(str){
//     return str.split(' ').reverse().join(' ')
// }

                            // Second Try
reverseWords=s=>s.split(' ').reverse().join(' ')

                            // Using Reduce
reverseWords=s=>s.split(' ').reduce((a,c)=>c+" "+a)

console.log(reverseWords("The greatest victory is that which requires no battle"), "battle no requires which that is victory greatest The")

/*
https://www.codewars.com/kata/51c8991dee245d7ddf00000e


Complete the solution so that it reverses all of the words within the string passed in.
Example:
"The greatest victory is that which requires no battle"
-RETURNS->
"battle no requires which that is victory greatest The"
*/