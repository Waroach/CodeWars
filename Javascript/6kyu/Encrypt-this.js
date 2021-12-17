var encryptThis = function(text) {
    text = text.split(' ')
    for(i=0;i<text.length;i++){
        if(text[i].length < 3){
            text[i] = text[i].charCodeAt(0) + text[i].substring(1)
        }else{
            text[i] = text[i].charCodeAt(0) + text[i].substring(text[i].length-1) + text[i].slice(2,text[i].length-1) + text[i][1]
        }
    }
    return text.join(' ')
}



                            // PSEUDOCODE
// first need to seperate the string into idividual words
// need to cycle thru each word and do the following
    // first convert the first letter into ASCII
    // Then swap the second and last letter



console.log(encryptThis("A"), "65");
console.log(encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
console.log(encryptThis("The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
console.log(encryptThis("The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
console.log(encryptThis("Why can we not all be like that wise old bird"), "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
console.log(encryptThis("Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");  



/*
https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript


Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)
Description:
Encrypt this!
You want to create secret messages which can be deciphered by the Decipher this! kata.
Here are the conditions:
Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/