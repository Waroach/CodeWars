// You will be given a sequence of objects representing data about developers
//  who have signed up to attend the next coding meetup that you are organising.
// write a function that returns the average age of developers (rounded to the
// nearest integer). In the example above your function should return 50 (number).
// Notes:
// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

function getAverageAge(list) {
    return Math.round(list.reduce((combinedAge,element)=>combinedAge+element.age,0)/list.length)
}

                                            // First Try WORKS BRUTE FORCE
// function getAverageAge(list) {
//     let total = 0, numOfUsers = 0
//     for(e in list){
//         total += list[e].age
//         numOfUsers++
//     }
//     return Math.round(total / numOfUsers)
// }


// Given the following input array:
console.log(getAverageAge([
{ firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
{ firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
]), 50)


console.log(getAverageAge([{"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"}]), 19)
console.log(getAverageAge([{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"}]), 31)
console.log(getAverageAge([{"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":41,"language":"Clojure"},{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},{"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},{"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":59,"language":"C"},{"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":60,"language":"C"},{"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":75,"language":"Python"},{"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":88,"language":"Ruby"},{"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":98,"language":"PHP"},{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"JavaScript"}]), 66)
console.log(getAverageAge([{"firstName":"Jakub","lastName":"Z.","country":"Czech Republic","continent":"Europe","age":42,"language":"Java"},{"firstName":"Mamadou","lastName":"E.","country":"Mali","continent":"Africa","age":22,"language":"Python"},{"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":88,"language":"Ruby"},{"firstName":"Emily","lastName":"A.","country":"Northern Ireland","continent":"Europe","age":32,"language":"JavaScript"},{"firstName":"Mehdi","lastName":"H.","country":"Tunisia","continent":"Africa","age":42,"language":"Python"},{"firstName":"Stevenson","lastName":"O.","country":"Haiti","continent":"Americas","age":22,"language":"Ruby"},{"firstName":"Seoyeon","lastName":"J.","country":"South Korea","continent":"Asia","age":29,"language":"Ruby"},{"firstName":"Ellen","lastName":"E.","country":"Finland","continent":"Europe","age":55,"language":"Ruby"},{"firstName":"Maia","lastName":"S.","country":"Tahiti","continent":"Oceania","age":28,"language":"Clojure"},{"firstName":"Manuel","lastName":"C.","country":"Equatorial Guinea","continent":"Africa","age":22,"language":"Ruby"}]), 38)