longest=(s1, s2)=>[...new Set(s1+s2)].sort().join('')


// function longest(s1, s2) {
//     return Array.from(new Set(s1 + s2)).sort().join('');
// }



                            // PSEUDOCODE
// Combine both strings
// create a new set of the string
// arrange the letters
// the make back into a string



/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.


Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/