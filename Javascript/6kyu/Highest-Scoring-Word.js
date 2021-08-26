function high(x){
    // Give each letter an altered index
    let alph ='0abcdefghijklmnopqrstuvwxyz'
    let highWord = ''
    let highCount = 0
    // Get the ‘points’ for each letter
    // Add those points together
    // Mini Function to do this.
    const wordScore = word => word.split('').reduce((a,c)=> a + alph.indexOf(c), 0)
    
    // Need to split into individial words.
    x.split(' ').forEach(w=>{
        const scoreCheck = wordScore(w)
        if (scoreCheck > highCount) {
            highWord = w
            highCount = scoreCheck
        }
    })
    // return results
    return highWord
}


                            // First Try
// function high(x){
//     const alpha = "abcdefghijklmnopqrstuvwxyz"
//     const wordScore = word => word.split('').reduce((a,c)=>a+(alpha.indexOf(c)+1),0)
//     let hWord = ""
//     let hSum = 0
    
//     x.split(' ').forEach(w=>{
//         const scoreCheck = wordScore(w)
//         if(scoreCheck>hSum){
//             hWord = w
//             hSum = scoreCheck
//         }
//     })
//     return hWord
// }

console.log(high('what time are we climbing up the volcano'), 'volcano')
console.log(high('aa b'), 'aa')

// Need to REDO this and understand concepts better


/*
Pseudocode
1) First we need to get a indecies + 1 of the alphabet
i.e. a,b,c = 1,2,3 not 0,1,2
2) Get points for each letter
3) Then sum those points
4) hold the word (as a string) and its point value. (hString, hSum)
5) compare to the next word (cString, cSum)
6) if the next word sum is higher reassaign the current word to the High String and Sum
7) if not go to the next word
8) return the highest scoring word as a string.
*/

/*
https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript


Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/