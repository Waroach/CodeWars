const elevatorDistance = array => array.reduce((total,curr,index)=>total+Math.abs(curr-(index==0?curr:array[index-1])),0)



                            // Completed using Reduce
// function elevatorDistance(array) {
//     return array.reduce((total,curr,index)=>total+Math.abs(curr-(index==0?curr:array[index-1])),0)
// }



                            // First Try || Works Great
// function elevatorDistance(array) {
//     // Create a total to retunr
//     let total = 0
//     // Step thru the array taking the total difference thru each step
//     for(let i=1; i<array.length;i++){
//         total += Math.abs(array[i-1] - array[i])
//     }
//     // return that total
//     return total
// }


console.log(elevatorDistance([5,2,8]), 9);
console.log(elevatorDistance([1,2,3]), 2);
console.log(elevatorDistance([7,1,7,1]), 18);



/*
https://www.codewars.com/kata/59f061773e532d0c87000d16/train/javascript


Imagine you start on the 5th floor of a building, then travel down to the 2nd floor,
then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.
Given an array representing a series of floors you must reach by elevator,
return an integer representing the total distance travelled for visiting each floor in the array in order.

// simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18

// if two consecutive floors are the same,
//distance travelled between them is 0
elevatorDistance([3,3]) = 0
Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.
*/