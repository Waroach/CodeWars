// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'

                            // First Try
// function solution(str){
//     var newString = "";
//     for (i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
                            // Second Try
// function solution(str){
//     return str.split('').reverse().join('')
// }

                            // Cleaned up Version
solution=s=>s.split('').reverse().join('')

console.log(solution('world'), 'dlrow')
console.log(solution('hello'), 'olleh')
console.log(solution(''), '')
console.log(solution('h'), 'h')
console.log(solution('Greetings from Earth'), 'htraE morf sgniteerG')