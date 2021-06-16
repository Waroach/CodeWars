function gooseFilter (birds){
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    return birds.filter(item=>!geese.includes(item))
}






// EXAPMLES FOUND ON WEB
    // --------------------------------------
// function gooseFilter(birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(item => !geese.includes(item));
// };
// var toTest = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// console.log(  gooseFilter(toTest)  );
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
    // --------------------------------------
// function gooseFilter2(birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(item => geese.indexOf(item) == -1);
// };
    // --------------------------------------