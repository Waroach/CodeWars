// You will be given an array of objects (associative arrays in PHP)
// representing data about developers who have signed up to attend
// the next coding meetup that you are organising.
// Your task is to return an object (associative array in PHP)
// which includes the count of each coding language represented at the meetup.


                                                            // Cleaned up code using Ternery style
const countLanguages = list =>
    list.reduce((languages, { language }) => {
        languages.hasOwnProperty(language) ? languages[language]++ : (languages[language] = 1)
        console.log(languages)
        return languages
    }, {})

                                                            // First Try WORKING
// function countLanguages(list) {
//     let lang = {}
//     list.reduce((languages, {language}) => {
//         if(languages.hasOwnProperty(language) == true){
//             languages[language]++
//             lang[language]++
//         }else{
//             languages[language] = 1
//             lang[language] = 1
//         }
//         return languages
//     }, {})
//     return lang
// }

// For example, given the following input array:
countLanguages([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
])