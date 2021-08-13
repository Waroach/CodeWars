function swapVowelCase(str) {
    let newStr = []
    str.split('').map(l=>{
        if(l=='a'||l=='e'||l=='i'||l=='o'||l=='u'||l=='A'||l=='E'||l=='I'||l=='O'||l=='U'){
            if(l==l.toLowerCase()){
                newStr.push(l.toUpperCase())
            }else{
                newStr.push(l.toLowerCase())
            }
        }else{
            newStr.push(l)
        }
    })
    return newStr.join('')
}

console.log(swapVowelCase(" "), " ")
console.log(swapVowelCase("C Is AlIvE!"), "C is alive!")
console.log(swapVowelCase("to"), "tO")
console.log(swapVowelCase("The"), "ThE")

/*
https://www.codewars.com/kata/5803c0c6ab6c20a06f000026/train/javascript


Challenge:
Given a string, return a copy of the string with the vowels' case swapped.
For this kata, assume that vowels are in the set "aeouiAEOUI".
Example: Given a string "C is alive!", your function should return "C Is AlIvE!"
Addendum: Your solution is only required to work for the ASCII character set.\
Please make sure you only swap cases for the vowels.
*/