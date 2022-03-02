
areYouPlayingBanjo = name => /r/i.test(name[0]) ? `${name} plays banjo` : `${name} does not play banjo`

                            // FIRST TRY || WORKING
// function areYouPlayingBanjo(name) {
//     if(/r/i.test(name[0])){
//         return `${name} plays banjo`
//     }else{
//         return `${name} does not play banjo`
//     }
// }



// PSEUDOCODE
// check if the first letter of the name is r or R
    // If so return name + DoesPlay
    // If not return name + DoesNotPlay



console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo");



/*
https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript


Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/