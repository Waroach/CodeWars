multiplicationTable = function(size) {
    let array1=[],array2=[],concat=[],cut=[]
    for(i=1;i<size+1;i++){
        for(j=1;j<size+1;j++){
            array2.push(i*j)
        }
        array1.push(i)
    }
    concat.push(...array1, ...array2)
    for(h=0;array2.length>=size;h++){
        cut.push(array2.splice(0,size))
    }
    return cut
}


/*
https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

Your task, is to create NxN multiplication table, of size provided in parameter.
for example, when given size is 3:
1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/