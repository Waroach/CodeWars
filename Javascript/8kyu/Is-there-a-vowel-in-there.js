
function isVow(a){

}

                            // First try
function isVow(a){
    let vowels = []
    a.filter(e=>{
        if(e===97){vowels.push('a')}
        if(e===101){vowels.push('e')}
        if(e===105){vowels.push('i')}
        if(e===111){vowels.push('o')}
        if(e===117){vowels.push('u')}
        else vowels.push(e)
    })
    return vowels
}


console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);

/*
https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript


Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
Return the resulting array.
*/