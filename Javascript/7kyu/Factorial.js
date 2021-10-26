const factorial = n => n==0 ? 1 : n * factorial(n-1)


                            // First try with recursion
// function factorial(n){
//     if(n===0) return 1
//     return n * factorial(n-1)
// }


console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);


/*
https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript


Your task is to write function factorial.
*/