                            // Single Line option.
const disariumNumber = n=> n == String(n).split('').reduce((a,c,i)=>a + Math.pow(c,i+1) ,0) ? "Disarium !!" : "Not !!"

                            // Single Line Above
// function disariumNumber(n){
//     let total = String(n).split('').reduce((a,c,i)=>a + Math.pow(c,i+1) ,0)
//     return total == n ? "Disarium !!" : "Not !!"
// }


                            // First Try
// function disariumNumber(n){
//     let total = 0
//     for(i=0;i<String(n).length;i++){
//         total += Math.pow(String(n)[i], i+1)
//     }
//     return total == n ? "Disarium !!" : "Not !!"
// }


console.log(disariumNumber(89),"Disarium !!");
console.log(disariumNumber(564),"Not !!");
console.log(disariumNumber(1024),"Not !!");
console.log(disariumNumber(135),"Disarium !!");
console.log(disariumNumber(136586),"Not !!");


/*
https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript


Definition
Disarium number is the number that The sum of its digits powered with
their respective positions is equal to the number itself.
Task
Given a number, Find if it is Disarium or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
*/