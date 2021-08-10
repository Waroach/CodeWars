function sortVowels(s){
    if (typeof s !== 'string') return ''
    return s.split(``).map(v=>/[aeiou]/i.test(v) ? '|'+v+'\n' : v+'|'+'\n').join``.slice(0,-1)
}

                            //First Try
// function sortVowels(s){
//     if (typeof s !== 'string') return ''
//     return s.split``.map(v=>{
//     if (/[aeiou]/i.test(v)) return '|'+v+'\n'
//     else return v+'|'+'\n'
//     }).join``.slice(0,-1)
// }

console.log(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|')
console.log(sortVowels('Rnd Te5T'), 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|')
console.log(sortVowels(1337), '')
console.log(sortVowels(undefined), '')

/*
https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/train/javascript


Sort the Vowels!
In this kata, we want to sort the vowels in a special format.
Task
Write a function which takes a input string s and return
a string in the following way:
Notes:
List all the Vowels on the right side of |
List every character except Vowels on the left side of |
Return every character in its original case
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
*/