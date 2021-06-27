// You will be given an array of objects representing data about developers
// who have signed up to attend the next coding meetup that you are organising.
// Notes:
// The original order should be preserved.
// If there are no GitHub admin developers in a given language then return
// an empty array [].
// The input array will always be valid and formatted as in the example above.
// The strings representing whether someone is a GitHub admin will always be
// formatted as 'yes' and 'no' (all lower-case).
// The strings representing a given language will always be formatted in the
// same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.

function findAdmin(list, lang) {
    return list.filter(e=> e.language===lang&&e.githubAdmin==='yes')
}

                                            // first Try WORKS BRUTEFORCE
// function findAdmin(list, lang) {
//     let jsAdmins = []
//     for(e in list){
//         if((list[e].language === lang)&&(list[e].githubAdmin === 'yes')){
//             jsAdmins.push(list[e])
//         }
//     }
//     return jsAdmins
// }

// Given the following input array:
console.log(findAdmin([
{ firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
{ firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
{ firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
], 'JavaScript'), '2')

console.log(findAdmin([
{ firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'yes' },
{ firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'no' },
{ firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
], 'Ruby'), '1')