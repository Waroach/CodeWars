// You are given two sorted arrays that both only contain integers.
// Your task is to find a way to merge them into a single one,
// sorted in asc order. Complete the function mergeArrays(arr1, arr2),
// where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation,
// since arr1 and arr2 must be arrays with 0 or more Integers.
// If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders.
// Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
                                                                // Examples
// arr1 = [1, 2, 3, 4, 5];
// arr2 = [6, 7, 8, 9, 10];
// mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr3 = [1, 3, 5, 7, 9];
// arr4 = [10, 8, 6, 4, 2];
// mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr5 = [1, 3, 5, 7, 9, 11, 12];
// arr6 = [1, 2, 3, 4, 5, 10, 12];
// mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

function mergeArrays(arr1, arr2) {
    let concat = arr1
    for(i=0;i<arr2.length;i++){
        arr1.push(arr2[i])
    }
    let uniq = concat.filter((c, index) => {
        return concat.indexOf(c) === index
    })
    console.log(concat)
    console.log(uniq)
    return uniq.sort((a, b) => a - b)
}

                                                    // First try did not work
// function mergeArrays(arr1, arr2) {
//     let uniq = new Set()
//     let concat = arr1
//     for(i=0;i<arr2.length;i++){
//         arr1.push(arr2[i])
//     }
//     for(element of concat){
//         uniq.add(element)
//     }
//     return uniq.sort((a, b) => a - b)
// }

mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])