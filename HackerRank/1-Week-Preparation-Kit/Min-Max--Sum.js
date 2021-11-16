function miniMaxSum(arr) {
    let total = arr.reduce((a,c)=>a+c,0)
    let minTotal = total - arr.sort((x,y)=>x-y)[arr.length-1]
    let maxTotal = total - arr.sort((x,y)=>x-y)[0]
    return console.log(minTotal, maxTotal)
}



/*
https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one&h_r=next-challenge&h_v=zen



Given five positive integers,
find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single line of two space-separated long integers.
Example
arr = [1,3,5,7,9]
The minimum sum is 1+3+5+7 = 16 and the maximum sum is 3+5+7+9 = 24. The function prints
16 24
Function Description
Complete the miniMaxSum function in the editor below.
miniMaxSum has the following parameter(s):
arr: an array of 5 integers
Print
Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.
Input Format
A single line of five space-separated integers.
Constraints
1 < arr[i] < 10square
Output Format
Print two space-separated long integers denoting the respective minimum and maximum values that can be
calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)
Sample Input
1 2 3 4 5
Sample Output
10 14
Explanation
The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:
Sum everything except 1, the sum is 2+3+4+5 = 14.
Sum everything except 2, the sum is 1+3+4+5 = 13.
Sum everything except 3, the sum is 1+2+4+5 = 12.
Sum everything except 4, the sum is 1+2+3+5 = 11.
Sum everything except 5, the sum is 2+3+4+5 = 10.
Hints: Beware of integer overflow! Use 64-bit Integer.
*/