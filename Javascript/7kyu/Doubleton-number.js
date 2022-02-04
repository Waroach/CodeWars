function doubleton(num){
    for(let i=num+1;i<1000000;i++){
        let test = [...new Set(i.toString().split(''))]
        if(test.length === 2) return i
    }
}



                            // PSEUDOCODE
// create a for loop that goes to 1000000
// start the loop with num +1
    // create a set named test
    // convert num into a string.
    // seperate elements of the string
    // pass the above array into the set
    // spread the above set object into an array
    // check length of array.
        // if length is 2 return num
        // else continue loop
    // return length
    


console.log(doubleton(120), 121, "Wrong result. It should be 121" );
console.log(doubleton(1234), 1311, "Wrong result. It should be 1311" );
console.log(doubleton(1), 10, "Wrong result. It should be 10" );
console.log(doubleton(10), 12, "Wrong result. It should be 12" );



/*
https://www.codewars.com/kata/604287495a72ae00131685c7/train/javascript


We will call a natural number a "doubleton number" if it contains exactly two distinct digits.
For example, [23, 35, 100, 12121] are doubleton numbers, and [123] and [9980] are not.
For a given natural number [n] (from [1] to [1 000 000]), you need to find the next doubleton number.
If [n] itself is a doubleton, return the next bigger than [n].
Examples:
doubleton(120) === 121
doubleton(1234) === 1311
doubleton(10) === 12
*/