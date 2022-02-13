function evenLast(numbers) {
    if (numbers.length === 0) return 0
    return numbers.reduce( (prev, cur, index)=> prev + (index%2===0 ? cur : 0) ) * numbers[numbers.length - 1]
}



                            // PSEUDOCODE
// Step thruy the array of numbers
    // if the index is even add it to the total.
    // multiply that total with the last item in the numbers array.
// return the result



console.log(evenLast([2, 3, 4, 5]), 30)



/*
https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript


Given a sequence of integers,
return the sum of all the integers that have an even index (odd index in COBOL),
multiplied by the integer at the last index.
Indices in sequence start from 0.
If the sequence is empty, you should return 0.
*/