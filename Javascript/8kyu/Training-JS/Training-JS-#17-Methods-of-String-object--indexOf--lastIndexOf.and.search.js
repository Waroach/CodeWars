function firstToLast(str,c){
    let first = str.indexOf(c)
    let last = str.lastIndexOf(c)
    if(first === -1 && last === -1){ return -1 }
    if(first >= 0 && last >= 0){ return last - first }
}

/*
indexOf() retrieves a string from the location of the fromindex to the right
    (If fromindex is omitted, began retrieval from index0).
lastIndexOf() retrieves a string from the location of the fromindex to the left
    (If fromindex is omitted, began retrieval from last chars).

Task
Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.
Please return the gap between the first position of c and the last position of c.
If there are a lot of c in the str, should return a positive integer; If there is only one c in str,
should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.
for example:
firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1
*/