
                            // First Try || WORKING
function remove(s){
    let startResult = []
    let endResult = []
    s.split('').filter( (e,i,arr) => e==='!' ? endResult.push(e) : startResult.push(e) )
    return startResult.concat(endResult).join('')
}


// PSEUDOCODE
// go thru the string and if Char/Element matches "!" move it to the end of the string


console.log(remove("Hi!") , "Hi!")
console.log(remove("Hi! Hi!") , "Hi Hi!!")
console.log(remove("Hi! Hi! Hi!") , "Hi Hi Hi!!!")
console.log(remove("Hi! !Hi Hi!") , "Hi Hi Hi!!!")
console.log(remove("Hi! Hi!! Hi!") , "Hi Hi Hi!!!!")



/*
https://www.codewars.com/kata/57fafd0ed80daac48800019f/train/javascript


Description:
Move all exclamation marks to the end of the sentence
Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
*/