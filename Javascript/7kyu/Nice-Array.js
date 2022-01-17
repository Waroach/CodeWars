function isNice(arr){
    if(arr.length < 2) return false
    for(let i=0;i<arr.length;i++){
        if( !(arr.includes(arr[i]-1)  || arr.includes(arr[i]+1)) )return false
    }
    return true
}


                            // PSEUDOCODE
// Step thru the array
    // Check if each number -1 or +1 is inside the array
    // maybe .contains




console.log(isNice([2,10,9,3]),true);
console.log(isNice([3,4,5,7]),false);



/*
https://www.codewars.com/kata/59b844528bcb7735560000a0/train/javascript


A Nice array is defined to be an array where for every value n in the array,
there is also an element n-1 or n+1 in the array.
example:
[2,10,9,3] is Nice array because
2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false.
You should also return false if input array has no elements.
*/