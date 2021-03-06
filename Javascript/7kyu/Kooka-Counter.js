const kookaCounter = function(laughing) {
    let count = 0
    laughing = laughing.split('').filter( l => l.toLowerCase() === 'h' ? l : null )
    for(i=0;i<laughing.length;i++){
        if(laughing[i] !== laughing[i+1]) count++
    }
    return count
}



                            // PSEUDOCODE
// create a variable called counter
// remove all the 'a' from the string or split array
// step thru the string 
// I need to count every time a hH changes from lower to upper or upper to lower
// Would like to rewrite this using .replace then .split .filter with the counter


console.log(kookaCounter(""), 0)
console.log(kookaCounter("hahahahaha"), 1)
console.log(kookaCounter("hahahahahaHaHaHa"), 2)
console.log(kookaCounter("HaHaHahahaHaHa"), 3)



/*
https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258/train/javascript


A family of kookaburras are in my backyard.
I can't see them all, but I can hear them!
How many kookaburras are there?
Hint
The trick to counting kookaburras is to listen carefully
The males go HaHaHa...
The females go hahaha...
And they always alternate male/female
^ Kata Note : No validation is necessary; only valid input will be passed :-)
*/