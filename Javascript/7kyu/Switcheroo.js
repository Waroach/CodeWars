
                            // Completed with .replace
function switcheroo(x){
    return x.replace(/[ab]/g,e=>e=="a"?"b":"a")
}


                            // Cleaned up into One line
// switcheroo=x=>x.split('').map(e => e=='c'?'c':e=='a'?'b':'a').join('')

                            // Completed with Turnerary
// function switcheroo(x){
//     return x.split('').map(e => e=='c'?'c':e=='a'?'b':'a').join('')
// }


                            // First Try || COMPLETED
// function switcheroo(x){
//     return x.split('').map(e=> {
//         if(e==='a') return 'b'
//         if(e==='b') return 'a'
//         return e
//     } ).join('')
// } 



                            // PSEUDOCODE
// seperate the letters into an array.
// Step thru the letters. 
    // if a letter is a switch it to b
    // if a letter is b switch it to a
    // if anything else return that element
// fuse the letters back into a string
// return the string



console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
console.log(switcheroo('ccccc'), 'ccccc');   



/*
https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript


Given a string made up of letters a, b, and/or c,
switch the position of letters a and b (change a to b and vice versa).
Leave any incidence of c untouched.
Example:
'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/