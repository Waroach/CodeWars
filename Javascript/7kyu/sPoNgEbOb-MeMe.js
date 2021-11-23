

                            // WORKING || Long way
function spongeMeme(sentence) {
    let spongebob = []
    sentence.split('').filter((e,i)=>{i%2===0?spongebob.push(e.toUpperCase()):spongebob.push(e.toLowerCase())})
    return spongebob.join('')
}



                            // First Try || FAILED || Not working
function spongeMeme(sentence) {
    return sentence.split('').map((e,i)=>i%2===0?e=e.toLowerCase:e=e.toUpperCase).join('')
}



console.log(spongeMeme("stop Making spongebob Memes!"), 'StOp mAkInG SpOnGeBoB MeMeS!')
console.log(spongeMeme("colored teens cant Be successful in tech"), 'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh')



/*
https://www.codewars.com/kata/5982619d2671576e90000017/train/javascript


Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?
You need to create a function that converts the input into this format,
with the output being the same string expect there is a pattern of uppercase and lowercase letters.
Examples:
spongeMeme("stop Making spongebob Memes!") // => 'StOp mAkInG SpOnGeBoB MeMeS!'
spongeMeme("colored teens cant Be successful in tech") // =>'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh'
*/