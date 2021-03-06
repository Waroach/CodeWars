function minimumNumber(numbers){
    numbers = numbers.reduce((p,c)=>p+c,0)
    for(let i=0;i<=100;i++){
        if(isPrime(numbers + i))return i
    }
}

function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}



// PSEUDOCODE
// total all the numbers in the array
// Create a variable number called count
// run a while loop that checks two things
    // add one to the total check if it is a prime
    // Minus one to the total check if it is a prime
// Each time add one to the count variable.
// when the above is true. return the count



console.log(minimumNumber([3,1,2]),1);
console.log(minimumNumber([5,2]),0);
console.log(minimumNumber([1,1,1]),0);
console.log(minimumNumber([2,12,8,4,6]),5);
console.log(minimumNumber([50,39,49,6,17,28]),2);



/*
https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript


Task :
Given a List [] of n integers ,
find minimum number to be inserted in a list,
so that sum of all elements of list should equal the closest prime number .
Notes
List size is at least 2 .
List's numbers will only positives (n > 0) .
Repetition of numbers in the list could occur .
The newer list's sum should equal the closest prime number .
Input >> Output Examples
1- minimumNumber ({3,1,2}) ==> return (1)
Explanation:
Since , the sum of the list's elements equal to (6) ,
the minimum number to be inserted to transform the sum to prime number is (1) ,
which will make the sum of the List equal the closest prime number (7) .
2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
Explanation:
Since , the sum of the list's elements equal to (32) ,
the minimum number to be inserted to transform the sum to prime number is (5) ,
which will make the sum of the List equal the closest prime number (37) .
3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Explanation:
Since , the sum of the list's elements equal to (189) ,
the minimum number to be inserted to transform the sum to prime number is (2) ,
which will make the sum of the List equal the closest prime number (191) .
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou
*/