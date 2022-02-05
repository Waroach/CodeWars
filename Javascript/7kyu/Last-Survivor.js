function lastSurvivor(letters, coords) {
    for (let i=0;i<coords.length;i++){
        letters = letters.slice(0, coords[i]) + letters.slice(coords[i]+1)
    }
    return letters
}



                            // PSEUDOCODE
// step thru the coords array
// Each time cuttin a element from the  letters string
// return the letters string at then end



console.log(lastSurvivor('abc', [1, 1]), 'a')
console.log(lastSurvivor('kbc', [0, 1]), 'b')
console.log(lastSurvivor('zbk', [2, 1]), 'z')
console.log(lastSurvivor('c', []), 'c')



/*



You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed,
in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.
Example:
let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers.
If you like this kata, check out the next one: Last Survivors Ep.2
*/