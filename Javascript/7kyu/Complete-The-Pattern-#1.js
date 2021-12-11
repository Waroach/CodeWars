function pattern(n){
    let output="";
    let currentNumber = 1
    if(n<1) return output
    if(n===1) return '1'
    while(currentNumber<=n){
        for(i=0;currentNumber>i;i++){
            output = output + currentNumber
        }
        currentNumber++
        output += "\n"
    }
    output = output.substring(0, output.length -1)
    return output;
}


                            // PSEUDOCODE
// if less then 1 return the string
// Then run a while loop...
    // as the while loop counts up it takes the number and prints it that many times.
    // then print /n
    // then add to the while loop.


console.log(pattern(1),"1");
console.log(pattern(2),"1\n22");
console.log(pattern(5),"1\n22\n333\n4444\n55555");


/*
https://www.codewars.com/kata/5572f7c346eb58ae9c000047/train/javascript


Task:
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
1
22
333
....
.....
nnnnnn
Examples:
pattern(5):
1
22
333
4444
55555
pattern(11):
1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
1111111111111111111111
Hint: Use \n in string to jump to next line
*/