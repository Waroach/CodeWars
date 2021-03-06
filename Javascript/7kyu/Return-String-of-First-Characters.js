function makeString(s) {
  return s
    .split(" ")
    .map((e) => e[0])
    .join("");
}

// PSEUDOCODE
// Split the string into single words.
//Take the first element out of each string from the above array.
// return the results

console.log(
  makeString("sees eyes xray yoat"),
  "sexy",
  "Wrong result for 'sees eyes xray yoat'"
);
console.log(
  makeString("brown eyes are nice"),
  "bean",
  "Wrong result for 'brown eyes are nice'"
);
console.log(
  makeString("cars are very nice"),
  "cavn",
  "Wrong result for 'cars are very nice'"
);
console.log(
  makeString("kaks de gan has a big head"),
  "kdghabh",
  "Wrong result for 'kaks de gan has a big head'"
);

/*
https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/train/javascript


In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.
For example:
"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.
*/
