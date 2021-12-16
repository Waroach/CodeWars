function unluckyDays(year){
    let count = 0    
    for(let month=0;month<12;month++){
        var date = new Date(year,month,13)
        if(date.getDay() == 5){
            count++
        }
    }
    return count
}


                            // PSEUDOCODE
// Create a variable that will count each time a friday happens in a year
    // create a for loop that will go to each month and grab the date of the 13th
    // if that date equals friday then add 1 to the counter
// return the counter



console.log(unluckyDays(1586), 1, "should be: 1");
console.log(unluckyDays(1001), 3, "should be: 3");
console.log(unluckyDays(2819), 2, "should be: 2");
console.log(unluckyDays(2792), 2, "should be: 2");
console.log(unluckyDays(2723), 2, "should be: 2");
console.log(unluckyDays(1909), 1, "should be: 1");
console.log(unluckyDays(1812), 2, "should be: 2");
console.log(unluckyDays(1618), 2, "should be: 2");
console.log(unluckyDays(2132), 1, "should be: 1");
console.log(unluckyDays(2065), 3, "should be: 3");



/*
https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript


Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
Find the number of Friday 13th in the given year.
Input: Year in Gregorian calendar as integer.
Output: Number of Black Fridays in the year as an integer.
Examples:
unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/