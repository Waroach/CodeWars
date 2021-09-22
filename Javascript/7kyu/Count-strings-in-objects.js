function strCount(obj){
    let count = 0
    for(let i in obj){
        if(typeof obj[i] == 'object') count += strCount(obj[i])
        if(typeof obj[i] == 'string') count += 1
    }
    return count
}
/*
Redo daily until i inderstand better
Day 2 redone
*/

console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
    }), 3)

/*
https://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript


Create a function strCount (takes an object as argument) that will count all string values inside an object.

For example:
strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
    })
  //returns 3
*/