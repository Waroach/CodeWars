                            // first try
// function maps(x){
//     let a = []
//     for(i=0;i<x.length;i++){
//         a.push(x[i] + x[i])
//     }
//     return a
// }

// Second try MAP VERSION
function maps(x){
    const mapNumbers = x.map(dN => dN  + dN)
    return mapNumbers
}

/*
https://www.codewars.com/kata/57f781872e3d8ca2a000007e



Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
*/