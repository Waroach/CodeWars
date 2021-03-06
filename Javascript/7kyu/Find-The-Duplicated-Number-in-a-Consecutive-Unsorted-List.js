function findDup( arr ){
    let copy = [...arr]
    copy.sort((a,b)=>a-b)
    for(let i=0;i<=copy.length;i++){
        if( copy[i]!==i+1 ) return i
    }
    return copy.length + 1
}



                            // PSEUDOCODE
// arrange the array in order.
// Step thru the array until you find the duplicate.
// when found return it.



console.log(findDup([1,2,2,3]), 2);
console.log(findDup([1,3,2,5,4,5,7,6]), 5);



/*
https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript


You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.
The array is unsorted.
An example valid array would be [3, 2, 5, 1, 3, 4].
It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.
You should return the duplicate value as a single integer.
*/