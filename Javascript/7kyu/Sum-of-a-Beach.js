
const regex = /sand|water|fish|sun/gi
const sumOfABeach = beach => !beach.match(regex) ? 0 : beach.match(regex).length


                            // First Try || WORKIKNG
// function sumOfABeach(beach) {
//     let regex = /sand|water|fish|sun/gi
//     return !beach.match(regex) ? 0 : beach.match(regex).length
// }



                            // PSEUDOCODE
// create a varable with a array that contains the key words
// Make sure to ignore case sensitivty or make all lower case
// maybe slice the array each time it finds a key word
// return the sliced length



console.log(sumOfABeach("SanD"), 1)
console.log(sumOfABeach("sunshine"), 1)
console.log(sumOfABeach("sunsunsunsun"), 4)
console.log(sumOfABeach("123FISH321"), 1)
// Long version tests
console.log(sumOfABeach("weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn"), 4)
console.log(sumOfABeach("sAnDsandwaTerwatErfishFishsunsunsandwater"), 10)
console.log(sumOfABeach("joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef "), 0)
console.log(sumOfABeach("jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f"), 10)
console.log(sumOfABeach("saNdsandwaterwAterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwater"), 100)



/*
https://www.codewars.com/kata/5b37a50642b27ebf2e000010/train/javascript


Beaches are filled with sand, water, fish, and sun.
Given a string, calculate how many times the words
"Sand", "Water", "Fish", and "Sun"
appear without overlapping (regardless of the case).
Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")    
*/