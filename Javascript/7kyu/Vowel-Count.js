function getCount(str) {
    let vowelsCount = 0;
    let vowels = ['a','e','i','o','u']
    str.split('').filter(l=>vowels.includes(l)?vowelsCount++:false)
    return vowelsCount;
}

console.log(getCount("abracadabra"), 5)


/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript


Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/