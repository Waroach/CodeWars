// You will be given an array of objects (associative arrays in PHP)
// representing data about developers who have signed up to attend
// the next coding meetup that you are organising.
// Your task is to return:
// true if developers from all of the following age groups have signed up:
// teens, twenties, thirties, forties, fifties, sixties, seventies,
// eighties, nineties, centenarian (at least 100 years young).
// false otherwise.

function isAgeDiverse(list) {
    let check = [false,false,false,false,false,false,false,false,false,false]
    for(e of list){
        if(e.age >= 100){
            check[0] = true
        }else if(e.age >= 90){
            check[1] = true
        }else if(e.age >= 80){
            check[2] = true
        }else if(e.age >= 70){
            check[3] = true
        }else if(e.age >= 60){
            check[4] = true
        }else if(e.age >= 50){
            check[5] = true
        }else if(e.age >= 40){
            check[6] = true
        }else if(e.age >= 30){
            check[7] = true
        }else if(e.age >= 20){
            check[8] = true
        }else if(e.age >= 13){
            check[9] = true
        }
    }
    return check.every(v => v === true) ? true : false
}

// For exampe, given the following input array:
console.log(isAgeDiverse([
{ firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
{ firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
{ firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
{ firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
{ firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
{ firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
{ firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
{ firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
]), 'true')