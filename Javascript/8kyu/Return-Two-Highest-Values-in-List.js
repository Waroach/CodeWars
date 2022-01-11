function twoHighest(arr) {
    let set = new Set(arr.sort((a,b)=>b-a))
    let result = []
    for(nums of set){
        result.push(nums)
    }
    return result.slice(0,2)
}



                            // PSEUDOCODE
// First sort the array in Decending order
// create a new array that is a set of unique values
// return the first two values



console.log(twoHighest([]), [])
console.log(twoHighest([15]), [15])
console.log(twoHighest([15, 20, 20, 17]), [20, 17])



/*
https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript


In this kata, your job is to return the two distinct highest values in a list.
If there're less than 2 unique values, return as many of them, as possible.
The result should also be ordered from highest to lowest.
Examples:
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/