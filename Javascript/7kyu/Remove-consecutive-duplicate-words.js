removeConsecutiveDuplicates = s => s.split(' ').filter((w,i,a)=>w!==a[i+1]).join(' ')

                            //Second Try ( still need work to burn into memory)
removeConsecutiveDuplicates = s => s.split(' ').filter((e,i,arr)=>e!=arr[i-1]).join(' ')

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta')
console.log(removeConsecutiveDuplicates('alpha alpha beta beta alpha alpha'), "alpha beta alpha")

/*
https://www.codewars.com/kata/5b39e91ee7a2c103300018b3


Your task is to remove all consecutive duplicate words from a string,
leaving only first words entries.
For example:
"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
--> "alpha beta gamma delta alpha beta gamma delta"
*/