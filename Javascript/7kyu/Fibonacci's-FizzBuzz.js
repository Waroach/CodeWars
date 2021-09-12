fibsFizzBuzz=n=>{
    // First lets make the fibs sequence in a array to the n
    let a=1, b=0, temp, arr=[];
    while (n >= 1){
        temp = a;
        a = a + b;
        b = temp;
        n--;
        // Second lets compare each sequence to its Fizz or Buzz or FizzBuzz section.
        if(b%3==0 && b%5==0){arr.push('FizzBuzz')}
        else if(b%3==0){arr.push('Fizz')}
        else if(b%5==0){arr.push('Buzz')}
        else{arr.push(b)}
    }
    return arr
}


console.log(fibsFizzBuzz(20),[1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"])

/*
https://www.codewars.com/kata/57bf599f102a39bb1e000ae5/train/javascript


Instructions
The goal of this kata is two-fold:
1.) You must produce a fibonacci sequence in the form of an array,
containing a number of items equal to the input provided.
2.) You must replace all numbers in the sequence divisible by 3 with Fizz,
those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.
For the sake of this kata, you can assume all input will be a positive integer.
Use Cases
Return output must be in the form of an array,
with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

Examples
Input: fibsFizzBuzz(5)
Output: [ 1, 1, 2, 'Fizz', 'Buzz' ]
Input: fibsFizzBuzz(1)
Output: [1]
Input: fibsFizzBuzz(20)
Output: [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
*/