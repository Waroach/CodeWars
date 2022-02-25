function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((p,c)=> c ? p+1 : p+0 ,0)
}


                            // FIRST TRY || Working Long Form
// function countSheeps(arrayOfSheep) {
//     let count = 0
//     arrayOfSheep.filter(isheep => isheep ? count++ : null)
//     return count
// }



                            // PSEUDOCODE1
// test for null/undefined
// Create a variable named count
// Step thry the array
    //If true add to count
// return count.




var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
console.log(countSheeps(array1), 17, "There are 17 sheeps in total")



/*
https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript


Consider an array/list of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).
For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
Hint: Don't forget to check for bad values like null/undefined
*/