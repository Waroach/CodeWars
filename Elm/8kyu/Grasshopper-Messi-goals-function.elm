module Goals exposing (goals)

goals : Int -> Int -> Int -> Int
goals a b c =
  a + b + c



-- PSEUDOCODE
{--
First we need to define a function called goals
  That takes 3 paramaters. each a Int. THEN Return a Int

Second we create the function called goals
  in Javascript it would look like this...

function goals(a, b, c){
  return a + b + c
}
--}



-- INFORMATION ABOUT KATA
{--
https://www.codewars.com/kata/55f73be6e12baaa5900000d4/train/elm


Messi goals function
Messi is a soccer player with goals in three leagues:
LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.
Note: the input will always be valid.
For example:
5, 10, 2  -->  17
--}