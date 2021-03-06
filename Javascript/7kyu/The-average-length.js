const averageLength = (arr) => arr.map(e=>e[0].repeat(Math.round(arr.join('').length / arr.length)))


                            // Works Great!
function averageLength(arr) { 
    return arr.map(e=>e[0].repeat(Math.round(arr.join('').length / arr.length)))
}


                            // First Try
function averageLength(arr) { 
    const ave = Math.round(arr.join('').length / arr.length)
    return arr.map(e=>e[0].repeat(ave))
}


/*
psudocode

to get the average, join the strings without spaces, then divide that by the total strings.
that will give you the average number, save that into const variable.
using a map shorten each string into one element, [0]
then repeat that const average number of times.


find average by adding all the letters deviding by the amount of words
Then recreate the strings using the above number to place that many letters.
*/

console.log(averageLength(['u', 'y']), ['u', 'y']);
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc']);
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee']);

/*
https://www.codewars.com/kata/5a430359e1ce0e35540000b1/train/javascript


Given an array of strings of the same letter type.
Return a new array, which will differ in that the length of each element
is equal to the average length of the elements of the previous array.

A few examples:
['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1
*/