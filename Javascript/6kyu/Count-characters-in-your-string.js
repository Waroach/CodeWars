function count(str){
    let charCount = {};
    str.split('').forEach(c=>charCount[c]?charCount[c]++:charCount[c]=1)
    return charCount
}

                            // BRUTE FORCE
function count(str){
    let charCount = {};
    str.toLowerCase()
    .split('')
    .sort()
    .forEach(c=>{
        if(!charCount[c]){
            charCount[c]=1
        }else{
            charCount[c]++
        }
    })
    return charCount
}

                            // First Try
// function count(s){
//     return s.split(``).reduce((a,b)=>(a[b]=a[b]+1||1,a),{})
// }


/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

I need to REDO this one

The main idea is to count all the occurring characters in a string.
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/