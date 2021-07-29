var capitals = function (word) {
    let arr = []
    word.split('').filter( (l,i)=>l===l.toUpperCase()? arr.push(i):console.log('fuck'))
    return arr
}

/*
https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

Should redo this without the Turnery...



Instructions
Write a function that takes a single string (word) as argument.
The function must return an ordered list containing the indexes of all capital letters in the string.
Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/