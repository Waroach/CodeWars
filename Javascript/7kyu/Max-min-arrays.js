function solve(arr){
    let sorted = arr.sort((a,b)=>a-b)
    let solved = []
    let begin = 0
    let end = sorted.length-1
    if(sorted.length%2==1){
        while(begin != end){
            solved.push(sorted[end])
            solved.push(sorted[begin])
            begin+=1
            end-=1
        }
    solved.push(sorted[end])
    }else{
        while(begin != end){
            solved.push(sorted[end])
            solved.push(sorted[begin])
            begin+=1
            end-=1
        }
    }
    return solved
}


/*
https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript


In this Kata, you will be given an array of unique elements,
and your task is to rearrange the values so that the first max
value is followed by the first minimum, followed by second max
value then second min value, etc.
For example:
solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.
More examples in the test cases.
Good luck!
*/