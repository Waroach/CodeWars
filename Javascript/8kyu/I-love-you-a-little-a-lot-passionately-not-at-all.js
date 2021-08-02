function howMuchILoveYou(nbPetals) {
    let n = nbPetals % 6
    if(n===1){
        return 'I love you'
    }else if(n === 2){
        return 'a little'
    }else if(n === 3){
        return 'a lot'
    }else if(n === 4){
        return 'passionately'
    }else if(n === 5){
        return 'madly'
    }else if((n === 6) || (n === 0)){
        return 'not at all'
    }
    console.log(n)
}

/*
https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
REDO maybe a case switch?


Who remembers back to their time in the schoolyard, 
when girls would take a flower and tear its petals, 
saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, 
where nb_petals > 0
*/