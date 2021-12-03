
                            // First Try || WORKS GREAT
function solve(s){
    let count = 0
    let maxCount = 0
    s.split('').filter(e=>{
        if( e.match(/[a|e|i|o|u]/i) ){
            count++
        }else{
            if(maxCount < count) maxCount = count
            count = 0
        }
    })
    return maxCount
}


                            // PSEUDOCODE
function solve(s){
    // Create a counter
    // Create max count

    // split and step thru string 
        // checking each charector in the string if it is a vowel.
        // if next char is a vowel count goes up one and contines
        // If it is NOT a vowel
        // if counter is larger then the max counter set max counter to counter
        // reset counter to 0
    // return max counter
}



console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
console.log(solve("cuboideonavicuare"),2);
console.log(solve("chrononhotonthuooaos"),5);
console.log(solve("iiihoovaeaaaoougjyaw"),8);



/*
https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript


The vowel substrings in the word codewarriors are o,e,a,io.
The longest of these has a length of 2.
Given a lowercase string that has alphabetic characters only
(both vowels and consonants) and no spaces,
return the length of the longest vowel substring.
Vowels are any of aeiou.
Good luck!
If you like substring Katas, please try:
Non-even substrings
Vowel-consonant lexicon
*/