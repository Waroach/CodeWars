// failed 3 out of 10
function timeConversion(s) {
    if( s.substring(s.length-2) === 'AM'){
        return s.substring(0, s.length - 2)
        }else{
            let timeSplit = s.split(':')
            timeSplit[0] = Number(timeSplit[0]) + 12
            return timeSplit.join(':').substring(0, s.length - 2)
        }
}


                            // still has errors
function timeConversion(s) {
    let hours = s.substring(0, 2)
    let minutes = s.substring(2, s.length-4)
    let aMPM = s.substring(s.length-2)
    let seconds = s.substring(6, s.length-2)
    
    if(aMPM === 'PM'){
        if(hours === '12') return hours+minutes+seconds
        hours = Number(hours) + 12
        return hours+minutes+seconds
    }
    if(hours === '12') hours === '00'
    return hours+minutes+seconds
    console.log(hours, minutes, seconds, 'test')
}


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