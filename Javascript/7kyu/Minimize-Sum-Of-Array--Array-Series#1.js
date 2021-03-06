function minSum(arr) {
    let total = 0
    arr = arr.sort((a,b)=>b-a)
    for(let i=1;i<=arr.length/2;i++){
        total += arr[i-1] * arr[arr.length-i]
    }
    return total
}



                            // PSEUDOCODE
// sort the array
// step thru half of the array
// create variable called total
// Multiply the first and last numbers of the array.
// Add that to the total
// repeat until done with nums.



console.log(minSum([5,4,2,3]), 22);
console.log(minSum([12,6,10,26,3,24]), 342);
console.log(minSum([9,2,8,7,5,4,0,6]), 74);



/*
https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript


Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
Notes
Array/list will contain positives only .
Array/list will always has even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou
*/