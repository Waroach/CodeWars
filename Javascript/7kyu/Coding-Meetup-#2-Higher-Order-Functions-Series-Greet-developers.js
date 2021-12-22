
// Hi < firstName here >, what do you like the most about < language here >?

function greetDevelopers(list) {
    for(user in list){
        list[user].greeting = (`Hi ${list[user].firstName}, what do you like the most about ${list[user].language}?`)
    }
    return list
}

                                                // First try - greeting not added correctly
// function greetDevelopers(list) {
//     list.prop = 'greeting'
//     for(user in list){
//         list[user].prop = 'greeting'
//         list[user].greeting = (`Hi ${list[user].firstName}, what do you like the most about ${list[user].language}?`)
//     }
// }

// For example, given the following input array:
greetDevelopers(list[
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
])


                            // PSEUDOCODE
// You will be given an array of objects (associative arrays in PHP)
// representing data about developers who have signed up to
// attend the next coding meetup that you are organising.
// Your task is to return an array where each object will have
// a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?