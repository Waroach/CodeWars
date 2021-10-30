
function mygcd(x,y){
    if (!y) return x
    return mygcd(y, x % y)
}

                            // First Try
// function mygcd(x,y){
//     let arr = []
//     // XXXX
//     for(i=1;i<x;i++){
//         if(x % i == 0)arr.push(i)
//     }
//     // YYYY
//     for(i=1;i<y;i++){
//         if(y % i == 0)arr.push(i)
//     }
//     // Sort arr
//     arr = arr.sort((a,b)=>b-a)
//     // find Greatest Common Divisor
//     for(i=0;i<arr.length;i++){
//         if (arr[i] == arr[i+1]) return arr[i]
//     }
//     return 1
// }


console.log(mygcd(30,12),6)
console.log(mygcd(8,9),1)
console.log(mygcd(1,1),1)


/*
https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript


Find the greatest common divisor of two positive integers.
The integers can be large, so you need to find a clever solution.
The inputs x and y are always greater or equal to 1, so the greatest
common divisor will always be an integer that is also greater or equal to 1.
*/