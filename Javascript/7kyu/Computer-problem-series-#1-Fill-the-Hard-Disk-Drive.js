function save(sizes, hd) {
    let total = sizes[0]
    for(let i=0;i<sizes.length;i++){
        if(total > hd)  return i
        total += sizes[i+1]
    }
    return sizes.length
}



                            // PSEUDOCODE
// step thru the sizes array
    // keep adding together until they are equal or less then the hd
    // either return above length without going over
    // or create a counter and return count



console.log(save([4, 4, 4, 3, 3], 12), 3);
console.log(save([4, 4, 4, 3, 3], 11), 2);
console.log(save([4, 8, 15, 16, 23, 42], 108), 6);
console.log(save([13], 13), 1);
console.log(save([1, 2, 3, 4], 250), 4);
console.log(save([100], 500), 1);
console.log(save([11, 13, 15, 17, 19], 8), 0);
console.log(save([45], 12), 0);



/*
https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/train/javascript


Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive.
The files must be saved in the order they appear in the queue.
Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
Do not expect any negative or invalid inputs.
*/