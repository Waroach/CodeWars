function halvingSum(n) {
    let total = 0
    for(i=n;i>0;i=parseInt(i/2)){
        total += i
    }
    return total
}

console.log(halvingSum(25),47)
console.log(halvingSum(127),247)

/*
https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript


Task
Given a positive integer n, calculate the following sum:
n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.
Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/