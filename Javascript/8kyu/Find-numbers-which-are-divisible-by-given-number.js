function divisibleBy(numbers, divisor){
    let nums = []
    for(const num of numbers){
        if (num % divisor == 0){
            nums.push(num)
        }
    }
    return nums
}

console.log(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
console.log(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
console.log(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1,3,5], 2), []);


/*
https://www.codewars.com/kata/55edaba99da3a9c84000003b/javascript


Complete the function which takes two arguments and returns all
numbers which are divisible by the given divisor.
First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
*/