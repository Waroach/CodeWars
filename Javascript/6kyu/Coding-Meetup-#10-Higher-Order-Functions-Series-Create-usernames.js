// write a function that adds the username property to each object in the input array:
// The value of the username property is composed by concatenating:
// firstName in lower-case + first letter of the lastName in lower-case + 
// and the birth year which for the purpose of this kata is calculated
// simply by subtracting age from the current year. Please make sure that
// your function delivers the correct birth year irrespective of when it
// will be executed, for example it should also work correctly for a
// meetup organised in 10-years-time. The example above assumes that
// the function is run in year 2020.

function addUsername(list){
    return list.map(e=>{return{...e,username:(e.firstName.toLowerCase()+e.lastName.slice(0,1).toLowerCase()+(Date.prototype.getFullYear()-e.age).toString())}})
}
                                            // First Try i dont think it like me using 2020 as year.
// function addUsername(list) {
//     let newList = {}
//     for(e in list){
//         userName = (list[e].firstName.toLowerCase() + list[e].lastName.toLowerCase().charAt(0) + (2020 - list[e].age))
//         list[e].username = userName
//         console.log(list[e])
//     }

//     // for(e in list){
//     //     userName = (list[e].firstName.toLowerCase() + list[e].lastName.toLowerCase().charAt(0) + (2020 - list[e].age))
//     //     list[e].username = userName
//     // }
//     console.log(newList)
// }

// Given the following input array:
console.log(addUsername([
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
]), 'emilyn1990 - nore2000')