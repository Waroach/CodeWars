function elapsedSeconds(startDate, endDate){
    return (endDate.getTime() - startDate.getTime()) / 1000
}


                            // This is giving NAN
function elapsedSeconds(startDate, endDate){
    return (Date(startDate) - Date(endDate))
}



                            // PSEUDOCODE
// We need to minus startDate with endDate using Date()



/*


Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.
Tips:
The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
The start time will always be before the end time.
*/