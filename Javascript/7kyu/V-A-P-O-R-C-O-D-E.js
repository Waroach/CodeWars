vaporcode=s=>s.split(' ').join('').split('').map(l=>l=l.toUpperCase()).join("  ")

                            // First Try
// function vaporcode(string) {
//     return string.split(' ').join('').split('').map(l=>l=l.toUpperCase()).join("  ")
// }

console.log(vaporcode("Let's go to the movies"),"L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S")
console.log(vaporcode("Why isn't my code working?"),"W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?")

/*
https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript


ASC Week 1 Challenge 4 (Medium #1)
Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
Examples:
vaporcode("Lets go to the movies") // output => "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
vaporcode("Why isn't my code working?") // output => "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
*/