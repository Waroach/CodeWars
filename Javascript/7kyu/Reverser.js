function reverse(n){
    var reverse=0;
    while(n>0) (reverse=reverse*10+n%10, n=Math.floor(n/10));
    return reverse;
}


console.log(reverse(1234), 4321);
console.log(reverse(10987), 78901);
console.log(reverse(1020), 201);

/*
https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/train/javascript


Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// Please do not use
const forbidden = "
    '
    `
    string
    fixed
    precision
    .keys
*/