                            // Works with no Errors
function timeConversion(input) {
    input = input.split(':');
    var hours = parseInt(input[0]);
    var timeFrame = input[2].slice(2);
    var seconds = input[2].slice(0,2);
    if ((timeFrame === 'PM') && (hours !== 12)) {
        hours += 12;
    }
    if ((hours === 12) && (timeFrame === 'AM')) {
        hours = '00';
    } else if (hours < 10) {
        hours = '0' + hours.toString();
    } else {
        hours = hours.toString();
    }
    return [hours, input[1], seconds].join(':')
}



                            // Still has 3 failed out of 10
// function timeConversion(s) {
//     if( s.substring(s.length-2) === 'AM'){
//         return s.substring(0, s.length - 2)
//         }else{
//             let timeSplit = s.split(':')
//             timeSplit[0] = Number(timeSplit[0]) + 12
//             return timeSplit.join(':').substring(0, s.length - 2)
//         }
// }



                            // First Try -- failed 3 out of 10
// function timeConversion(s) {
//     let hours = s.substring(0, 2)
//     let minutes = s.substring(2, s.length-4)
//     let aMPM = s.substring(s.length-2)
//     let seconds = s.substring(6, s.length-2)
    
//     if(aMPM === 'PM'){
//         if(hours === '12') return hours+minutes+seconds
//         hours = Number(hours) + 12
//         return hours+minutes+seconds
//     }
//     if(hours === '12') hours === '00'
//     return hours+minutes+seconds
//     console.log(hours, minutes, seconds, 'test')
// }



/*
https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen


Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
Example
s = '12:01:00PM'
Return '12:01:00'
s = '12:01:00AM'
Return '00:01:00'.
Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
timeConversion has the following parameter(s):
string s: a time in 12 hour format
Returns
string: the time in 24 hour format
Input Format
A single string  that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).
Constraints
All input times are valid
Sample Input
07:05:45PM
Sample Output
19:05:45
*/