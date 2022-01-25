                            // SINGLE LINE
maxTriSum=numbers=>([...new Set(numbers)]).sort((a,b)=>a-b).slice(-3).reduce((p,c)=>p+c,0)


                            // Third Try || WORKING
// function maxTriSum(numbers){
//     return ([...new Set(numbers)]).sort((a,b)=>a-b).slice(-3).reduce((p,c)=>p+c,0)
// }


                            // SECOND TRY || WORKING
// function maxTriSum(numbers){
//     numbers.sort((a,b)=>a-b)
//     let maxSet = [...new Set(numbers)]
//     return maxSet.slice(maxSet.length-3).reduce((p,c)=>p+c,0)
// }


                            // First Try || NOT WORKING adding a neg with positive same number did not give 0
// function maxTriSum(numbers){
//     numbers.sort((a,b)=>b-a)
//     let maxSet = []
//     for(let i=1;i<=numbers.length;i++){
//         if(maxSet.length === 3) return maxSet.reduce((p,c)=>p+c,0)
//         if(numbers[i-1] !== numbers[i]) maxSet.push(numbers[i-1])
//     }
// }



                            // PSEUDOCODE
// Sort the numbers largest to smallest
// Remove duplicates
// Splice the numbers array leaving the first three elements
// Total the three numbers
// return the total



console.log(maxTriSum([3,2,6,8,2,3]),17);
console.log(maxTriSum([2,9,13,10,5,2,9,5]),32);
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]),18);
console.log(maxTriSum([-3,-27,-4,-2,-27,-2]),-9);
console.log(maxTriSum([-14,-12,-7,-42,-809,-14,-12]),-33);
console.log(maxTriSum([-13,-50,57,13,67,-13,57,108,67]),232);
console.log(maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29]),41);
console.log(maxTriSum([-2,0,2]),0);
console.log(maxTriSum([-2,-4,0,-9,2]),0);
console.log(maxTriSum([-5,-1,-9,0,2]),1);



/*
https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript


Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
Notes :
Array/list size is at least 3 .
Array/list numbers could be a mixture of positives , negatives and zeros .
Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)
Note : duplications are not included when summing , (i.e) the numbers added only once .
2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,
Note : duplications are not included when summing , (i.e) the numbers added only once .
3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,
Note : duplications are not included when summing , (i.e) the numbers added only once .
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou
*/