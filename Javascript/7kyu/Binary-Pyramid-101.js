function BinaryPyramid(m, n) {
    let result = 0
    while (m <= n) {
        result += Number(m.toString(2))
        m++
    }
    return result.toString(2)
}



// PSEUDOCODE
// take the numbers from m to n
// i.e. m=1, n=5. so 1, 2, 3, 4, 5
// convert them into binary
// add each numbers binary form
//i.e.  1=1, 2=10, 3=11, 4=100
// 1+10+11+100 = 122
// return the total result in binary form
//i.e 122 = 1111010



console.log(BinaryPyramid(1, 4), "1111010");
console.log(BinaryPyramid(1, 6), "101001101");
console.log(BinaryPyramid(6, 20), "1110010110100011");
console.log(BinaryPyramid(21, 60), "1100000100010001010100");



/*
https://www.codewars.com/kata/5596700a386158e3aa000011/train/javascript


Given two numbers m and n, such that 0 ≤ m ≤ n :
convert all numbers from m to n (inclusive) to binary
sum them as if they were in base 10
convert the result to binary
return as a string
Example
1, 4  -->  1111010
because:
    1  // 1 in binary is 1
+  10  // 2 in binary is 10
+  11  // 3 in binary is 11
+ 100  // 4 in binary is 100
-----
  122  // 122 in binary is 1111010
*/