function repeats(arr){
    // look at each number
    // check if number exists somewhere else
    // total numbers that do not have dublicats
    // give that total back.
    return arr.filter(x=>arr.indexOf(x)===arr.lastIndexOf(x)).reduce((a,c)=>a+c)
}

/*
https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

Pseudocode
In order to add the single integers together, we need to separate them from the integers that occur twice.
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
The test implemented by .filter() is:  
.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)) 
This says: Starting at the first element (x), (arrow function, => do this thing) - see if the element you’re at matches the last element in the array. So, .filter() will create a new array with all the integers that have a match, and therefore; will leave the two single digits in the original array. Ex: [7,8]
The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex
The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.  The reduce method takes in a minimum of the first 2, up to 4 values: the accumulator, current value, current index(optional), and source array(optional). 
The reducer function we provided was .reduce((a, b) => a + b)), which will start at the beginning of the array (ex: [7,8]) and identify 7 as the accumulator, then go to the next element: 8, the current value. 
Now that you have these things (a, b) -  (arrow function => do this thing) -  add them together a + b.   
This results in a reduced array, taking an array of two elements and reducing them to one.


Instructions for kata
In this Kata, you will be given an array of numbers in which two numbers
occur once and the rest occur only twice. Your task will be to return
the sum of the numbers that occur only once.
For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and
8 occur once, and their sum is 15. Every other number occurs twice.
More examples in the test cases.
Good luck!
*/