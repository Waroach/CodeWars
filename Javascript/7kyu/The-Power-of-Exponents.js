function power(base, exponent){
    if(exponent === 0){
        return 1
    }else{
        return exponent < 0 ? 1/( base * power(base, Math.abs(exponent)-1) ) : base * power(base, exponent-1)
    }
}


                            // Using RECURSION
// function power(base, exponent){
//     if(exponent === 0){
//       return 1
//     }else if (exponent < 0){
//       return 1/(base * power(base, Math.abs(exponent)-1)) 
//     }else{
//       return base * power(base, exponent-1) 
//     }
// }


                            // Completed
// function power(base, exponent){
//     let total = 0
//     if(exponent < 0){
//         for(i=1;i<Math.abs(exponent);i++){
//             total += 1/(base * base)
//         }
//     }else{
//         for(i=1;i<exponent;i++){
//             total += (base * base)
//         }
//     }
//     return total
// }



                            // Math.pow() this function is not allowed but does work
// function power(base, exponent){
//     return Math.pow(base, exponent)
// }


console.log(power(2, 3), 8)
console.log(power(4, -2), 0.0625, "power(x,negative) should be equal 1/power(x,positive)")



/*
https://www.codewars.com/kata/53270633b7320eeb0500031d/train/javascript


This kata is based on: Exponent Method
Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.
Unlike the Exponent Method, you should also take in account negative exponents.
Your solution won't be tested against special cases leading to undefined values (0**-2 for example)
Note: The ** operator (JS: Math.pow) has been disabled.
Examples:
power(2, 3)   // 8
power(4, -2)  // 0.0625
*/