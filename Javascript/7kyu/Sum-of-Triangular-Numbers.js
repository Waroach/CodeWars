function sumTriangularNumbers(n) {
    if (n <= 0) return 0
    return Array.from({ length: n }, (_, index) => index + 1)
        .map(
            (number, index, array) =>
                index === 0
                ? number
                : array.slice(0, index + 1).reduce((total, value) => total + value, 0)
            )
        .reduce((total, value) => total + value, 0)
}


                            // PSEUDOCODE
// Lets look at how the triangle number is made each time.
// 01                       <-- if n === 1 then return 01
// 02 03                    <-- if n === 2 then return 03
// 04 05 06                 <-- if n === 3 then return 06
// 07 08 09 10              <-- if n === 4 then return 10
// 11 12 13 14 15           <-- if n === 5 then return 15
// 16 17 18 19 20 21        <-- if n === 6 then return 21
// 22 23 24 25 26 27 28     <-- if n === 7 then return 28
// you have to make a row of numbers for each n
// then take the last number of the row



console.log(sumTriangularNumbers(6), 56);
console.log(sumTriangularNumbers(34), 7140);
console.log(sumTriangularNumbers(-291), 0);
console.log(sumTriangularNumbers(943), 140205240);
console.log(sumTriangularNumbers(-971), 0);



/*
https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript


Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.)
obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.
Triangular Numbers cannot be negative so return 0 if a negative number is given.
*/