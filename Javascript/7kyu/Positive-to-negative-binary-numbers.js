function positiveToNegative(a) {
    a = a.map(x => 1 - x);
    for (let i = a.length - 1; i >= 0; i--) {
        a[i] = 1 - a[i];
        if (a[i]) break;
    }
    return a;
}



                            // PSEUDOCODE
// Take the array and swap each element
    // if array element is 1 change it to 0
    // if array element is 0 change it to 1
// then using binary math.
    // you add 1 to each element
    // since each element can ONLY be either 1 or 0
        // 0 = 0+1 becomes 1
        // 1 = 1+1 becomes 0 and CARRY the 1



// Test Cases
console.log(positiveToNegative([0, 1, 0, 0, 1]), [1, 0, 1, 1, 1]);
console.log(positiveToNegative([0, 0, 0, 0]), [0, 0, 0, 0]);
console.log(positiveToNegative([0, 0, 1, 0]), [1, 1, 1, 0]);
console.log(positiveToNegative([0, 0, 1, 1]), [1, 1, 0, 1]);
console.log(positiveToNegative([0, 1, 0, 0]), [1, 1, 0, 0]);



/*
https://www.codewars.com/kata/5becace7063291bebf0001d5/train/javascript


Given an array of ones and zero(e)s that represents a positive binary number,
convert the number to two's complement value.
Two's complement is the way most computers represent positive or negative integers.
The most significant bit is 1 if the number is negative, and 0 otherwise.
Examples:
[1,1,1,1] = -1
[1,0,0,0] = -8
[1,1,0,1] = -3
To get the two's complement negative notation of an integer,
you take the number in binary.
You then flip the bits, and add one (with carry) to the result.
For example:
[0,0,1,0] = 2 in base 10
[1,1,0,1] <- Flip the bits
Add 1 (with carry):
[1,1,1,0] = -2
The output array must have the same length as the input array.
*/