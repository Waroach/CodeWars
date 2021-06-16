// function countPositivesSumNegatives(input) {
//     let negS = input.filter(n=>n<0)
//     if(negS!=0){
//         negS = negS.reduce((a,c)=>a+c,0)
//     }else{
//         negS = []
//     }
//     let posT = input.filter(n=>n>0)
//     if(posT!=0){
//         posT = posT.length
//     }else{
//         posT = []
//     }
//     if(!posT && !negS){
//         return []
//     }else{
//         return [posT, negS]
//     }
// }



function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return []
    }
    let array = [0, 0]

    for(let i=0; i<input.length; i++) {
        if(input[i] <= 0) {
            array[1] += input[i]
        } else {
            array[0] += 1
        }
    }
    return array
}