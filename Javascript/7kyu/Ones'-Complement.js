const onesComplement = n => n.split('').map(e=>e==="0"?e="1":e="0").join('')



                            // First Try
// function onesComplement(n) {
//     return n.split('').map(e=>e==="0"?e="1":e="0").join('')
// }



                            // PSEUDOCODE
// step thru the each element of the string
// if the element is a "0" make it a "1"
// if the element is a "1" make it a "0"


console.log(onesComplement("0"), "1");
console.log(onesComplement("1"), "0");
console.log(onesComplement("01"), "10");
console.log(onesComplement("10"), "01");
console.log(onesComplement("1101"), "0010");



/*
https://www.codewars.com/kata/59b11f57f322e5da45000254/train/javascript


The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:
onesComplement(1001) = 0110
onesComplement(1001) = 0110
For any given binary number,formatted as a string, return the Ones' Complement of that number.
*/