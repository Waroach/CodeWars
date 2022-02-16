String.prototype.isLetter = function() {
    if(this.length === 0 || this.length >=2)return false
    regex = /[a-z]/i
    return regex.test(this)
}



                            // PSEUDOCODE
// Check if length is 1
    // If so using Regex check to see if it is a letter
        //if so return true
// otherwise return false



console.log("".isLetter(), false);
console.log("a".isLetter(), true);
console.log("X".isLetter(), true);
console.log("7".isLetter(), false);
console.log("*".isLetter(), false);
console.log("ab".isLetter(), false);
console.log("a\n".isLetter(), false);



/*
https://www.codewars.com/kata/567de72e8b3621b3c300000b/train/javascript


Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/