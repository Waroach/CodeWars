function lonelyinteger(a) {
    a = a.sort((a,b)=>b-a)
    
    let i
    for(i=0;i<a.length;i++){
        if(a[i]!==a[i+1] && a[i]!==a[i-1]){
            return a[i]
        }
    }
}


/*
https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two


Given an array of integers, where all elements but one occur twice, find the unique element.

Example
a = [1,2,3,4,3,2,1]
The unique element is 4.
Function Description
Complete the lonelyinteger function in the editor below.
lonelyinteger has the following parameter(s):
int a[n]: an array of integers
Returns
int: the element that occurs only once
Input Format
The first line contains a single integer, , the number of integers in the array.
The second line contains  space-separated integers that describe the values in .
Constraints
1 < n < 100
It is guaranteed that  is an odd number and that there is one unique element.
0 < a[i] < 100, where 0 < i < n.
*/