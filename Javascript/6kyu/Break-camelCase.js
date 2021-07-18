solution=string=>string.split('').map(e=>e===e.toUpperCase()?" "+e:e).join('')

                            // Frist try works great
// function solution(string) {
//     return string.split('').map(e => e === e.toUpperCase() ? " "+e:e).join('')
// }

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/