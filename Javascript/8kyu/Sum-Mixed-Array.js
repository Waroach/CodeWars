function sumMix(x){
    // grab each item from the array
    let total = 0
    for(i=0;i<x.length;i++){
      // check if it is a number and or turn into a number
        total += Number(x[i])
      // sum to accumalitve total
    }
    // return that total as a number
    return total
}



/*
https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/