// You will be given an array of objects (associative arrays in PHP)
// representing data about developers who have signed up to attend
// the next coding meetup that you are organising.
// Your task is to return either:
// true if all developers in the list code in the same language; or
// false otherwise.

function isSameLanguage(list) {
    let language = list[0].language
    for(i=0;i<list.length;i++){
        if(list[i].language != language){
            return false
        }else{
            language = list[i].language
        }
    }
    return true
}

// For example, given the following input array:
isSameLanguage([
    { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'JavaScript' },
    { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'JavaScript' },
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'c' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
])