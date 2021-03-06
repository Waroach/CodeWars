
                            // Created a one liner
const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => (yourLeft+yourRight) === (friendsLeft+friendsRight) && Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight)?  true :  false


                            // First Try || WORKING
// function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
//     if((yourLeft+yourRight) === (friendsLeft+friendsRight) && Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight)) return true
//     return false
// }


console.log(areEquallyStrong(10,15,15,10),true)
console.log(areEquallyStrong(15,10,15,10),true)
console.log(areEquallyStrong(10,10,10,10),true)
console.log(areEquallyStrong(15,10,15,9),false)
console.log(areEquallyStrong(10,5,5,10),true)
console.log(areEquallyStrong(1,10,10,0),false)
console.log(areEquallyStrong(10, 5, 11, 4),false)


                            // PSEUDOCODE
    // Find largest arm for each person
    // if equal return true otherwise return false


/*
https://www.codewars.com/kata/5894017082b9fb62c50000df/train/javascript


Task
Call two arms equally strong if the heaviest weights they each are able to lift are equal.
Call two people equally strong if their strongest arms are equally strong
(the strongest arm can be both the right and the left), and so are their weakest arms.
Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
Example
For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, the output should be false.
Input/Output
[input] integer yourLeft
A non-negative integer representing the heaviest weight you can lift with your left arm.
[input] integer yourRight
A non-negative integer representing the heaviest weight you can lift with your right arm.
[input] integer friendsLeft
A non-negative integer representing the heaviest weight your friend can lift with his or her left arm.
[input] integer friendsRight
A non-negative integer representing the heaviest weight your friend can lift with his or her right arm.
[output] a boolean value
*/