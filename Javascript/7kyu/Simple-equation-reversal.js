
                            // Using a Regex to detect math operators
function solve(eq){
    return eq.split(/([*\+\-\/])/).reverse().join('');
}


                            // Cleaned up
// function solve(eq){
//     eq = eq.split('')
//     let result = []
//     let nums = []
//     for(let i=0; i<eq.length;i++){
//         if( Number(eq[i]) || eq[i] === '0'){
//             nums.push(eq[i])
//             if(i == eq.length-1) result.unshift(nums.join(''))
//         }
//         if(eq[i] != Number(eq[i])){
//             result.unshift(nums.join(''))
//             nums = []
//             result.unshift(eq[i])
//         }
//     }
//     return result.join('')
// }


                            // First try with PSUDOCODE
// function solve(eq){
//     eq = eq.split('')
//     // create new string
//     let result = []
//     // create temp stringNumber
//     let nums = []
//     //Step thru array
//     for(let i=0; i<eq.length;i++){
//         // if i === number then push to stringNumber
//         if( Number(eq[i]) || eq[i] === '0'){
//             nums.push(eq[i])
//         }
//         // If numbers is end of array then add stringNumber to result
//         if(i == eq.length-1) result.unshift(nums.join(''))
//         // if i !=== number then do 3 things
//             // unshift numberString
//             // reset numberString
//             // unshift i
//         if(eq[i] != Number(eq[i])){
//             result.unshift(nums.join(''))
//             nums = []
//             result.unshift(eq[i])
//         }
//     }
//     return result.join('')
// }



console.log(solve("100*b/y"),"y/b*100");
console.log(solve("a+b-c/d*30"),"30*d/c-b+a");
console.log(solve("a*b/c+50"),"50+c/b*a");



/*
https://www.codewars.com/kata/5aa3af22ba1bb5209f000037


Given a mathematical equation that has *,+,-,/, reverse it as follows:
solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"
More examples in test cases.
Good luck!
Please also try:

Simple time difference
https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2
Simple remove duplicates
https://www.codewars.com/kata/5ba38ba180824a86850000f7
*/