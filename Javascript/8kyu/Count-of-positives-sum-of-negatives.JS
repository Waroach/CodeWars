// function countPositivesSumNegatives(input) {
//     let negS = input.filter(n=>n<0)
//     if(negS!=0){
//         negS = negS.reduce((a,c)=>a+c,0)
//     }else{
//         negS = []
//     }
//     let posT = input.filter(n=>n>0)
//     if(posT!=0){
//         posT = posT.length
//     }else{
//         posT = []
//     }
//     if(!posT && !negS){
//         return []
//     }else{
//         return [posT, negS]
//     }
// }



function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return []
    }
    let array = [0, 0]

    for(let i=0; i<input.length; i++) {
        if(input[i] <= 0) {
            array[1] += input[i]
        } else {
            array[0] += 1
        }
    }
    return array
}

/*
https://www.codewars.com/kata/576bb71bbbcf0951d5000044


Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
If the input array is empty or null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/