function doubleChar(str) {
    let newStr = ""
    str.split('').filter(e=>newStr+=e+e)
    return newStr
}

                            //First Try Brute Force
// function doubleChar(str) {
//     let newStr = ""
//     for(i=0;i<str.split('').length;i++){
//         newStr += str[i] + str[i]
//     }
//     return newStr
// }

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");


/*
https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript


Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
doubleChar("String") ==> "SSttrriinngg"
doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
doubleChar("1234!_ ") ==> "11223344!!__  "
Good Luck!
*/