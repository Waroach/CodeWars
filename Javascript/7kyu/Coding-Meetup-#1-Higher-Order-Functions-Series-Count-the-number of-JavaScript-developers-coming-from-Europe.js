// You will be given an array of objects (hashes in ruby)
// representing data about developers who have signed up
// to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.
// For example, given the following list:
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

function countDevelopers(list) {
    let count = 0
    for(i=0;i<list.length;i++){
        if((list[i].continent.toLowerCase() == 'europe') && (list[i].language.toLowerCase() == 'javascript')){
            console.log(`${list[i].continent} ${list[i].language}`)
            count++
        }
        console.log(list[i])
    }
    return count
}