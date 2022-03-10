function getCount(str) {
    let vowelsCount = 0;
    let vowels = ['a','e','i','o','u']
    str.split('').filter(l=>vowels.includes(l)?vowelsCount++:false)
    return vowelsCount;
}



                            // PSEUDOCODE
// take a string and check each element
// if any element matches a letter that is inside of the vowel array
// return the total


console.log(getCount("abracadabra"), 5)
console.log(getCount("testtesttest"), 3)


/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript


Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/