var FilterString = function(value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
}

                            // FIRST TRY || WORKING
// var FilterString = function(value) {
//     let result = ''
//     value.split('').filter(a=>a==Number(a)?result+=a:false)
//     return Number(result)
// }

console.log(FilterString("123"), 123, 'Just return the numbers')
console.log(FilterString("a1b2c3"), 123, 'Just return the numbers')
console.log(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers')

/*
https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript


Filter the number
Oh no! The number has been mixed up with the text.
Your goal is to retreive the number from the text,
can you return the number back to it's original state?
Task
Your task is to return a number from a string.
Details
You will be given a string of numbers and letters mixed up,
you have to return all the numbers in that string in the order they occur.
*/