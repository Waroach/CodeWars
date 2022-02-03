function strangeMath(n, k){
    let nArray =[]
    for( let i=1;i<=n;i++){
        nArray.push(i)
    }
    return nArray.sort().indexOf(k) + 1
}



                            // PSEUDOCODE
// create a variable name nArray
// create a for loop
// add a number to the nArray n amount of times.
// sort aArray without params.
// then find location of k in nArray.
// Return the element location + 1



console.log(strangeMath(11, 2), 4);
console.log(strangeMath(15, 5), 11);
console.log(strangeMath(15, 15), 7);



/*
https://www.codewars.com/kata/604517d65b464d000d51381f/train/javascript


In a certain kingdom, strange mathematics is taught at school.
Its main difference from ordinary mathematics is that the numbers in it are not ordered in ascending order,
but lexicographically, as in a dictionary (first by the first digit, then, if the first digit is equal, by the second, and so on).
In addition, we do not consider an infinite set of natural numbers, but only the first n numbers.
So, for example, if n = 11, then the numbers in strange mathematics are ordered as follows:
1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9.
Help your students to learn this science: write a function that receives
two integer numbers: n (total amount of numbers in strange mathematics) and k (number from sequence) and returns the location
of a given number k in the order defined in strange mathematics.
For example, if n = 11 and k = 2, the function should return 4 as the answer.
Input: 1 <= n <= 100 000 , 1 <= k <= n.
Output: position of the number k in sequence of the first n natural numbers in lexicographic order. Numbering starts with 1.
Examples:
strangeMath(11, 2) === 4
strangeMath(15, 5) === 11
strangeMath(15, 15) === 7
*/