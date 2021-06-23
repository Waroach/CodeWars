// You will be given a sequence of objects representing data
// about developers who have signed up to attend the next
// coding meetup that you are organising.
// Your task is to return a sequence which includes the
// developer who is the oldest. In case of a tie, include
// all same-age senior developers listed in the same order as
// they appeared in the original input array.

function findSenior(list) {
    let age = list[0].age
    let sameAge = []
    for(i=0; i<list.length; i++){
        if(age < list[i].age){
            age = list[i].age
        }
    }
    for(i=0;i<list.length;i++){
        if(age  == list[i].age){
            sameAge.push(list[i])
        }
    }
    return sameAge
}

// For example, given the following input array:
findSenior([
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
])