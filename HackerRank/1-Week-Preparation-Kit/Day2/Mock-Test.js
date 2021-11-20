function flippingMatrix(matrix) {
    let temp = 0

    let row = 0
    let num = 0
    let matrixReverse = matrix[0].reverse()
    let rowReverse = 0
    let numReverse = 0
    // code
    for(let i=0;i<matrix.length;i++){
        if(matrix[0][i] < matrix[3][i]){
            if( temp < (matrix[3][i] - matrix[0][i]) ) {
                row = i
                num = matrix[3][i]
            }
        }
        // TEST for reverse top row.
        if(matrixReverse[i] < matrix[3][i]){
            if( temp < (matrix[3][i] - matrixReverse[i]) ) {
                rowReverse = i
                numReverse = matrix[3][i]
            }
        }
    }

    
}

flippingMatrix( [[112, 42, 83, 119],[56, 125, 56, 49],[15, 78, 101, 43],[62, 98, 114, 108]] )


/*


We Start Out with the follwing 2n x 2n matrix
    [112, 42, 83, 119]
    [56, 125, 56, 49]
    [15, 78, 101, 43]
    [62, 98, 114, 108]
We can perform the following operations to maximixe the sum of the n x n submatrix in the upper-left corner:
1 - Reverse Column 2 resulting in the Matrix
    [112, 42, 114, 119]
    [56, 125, 101, 49]
    [15, 78, 56, 43]
    [62, 98, 83, 108]
2 - Reverse Row 0 resulting in the Matrix
    [119, 114, 42, 112]
    [56, 125, 101, 49]
    [15, 78, 56, 43]
    [62, 98, 83, 108]
When we sum the values in the n x n submatrix in the upper-left quadrant, we get 119 + 114 + 56 + 125 = 414
Thus we print 414 on a new line

Flipping the Matrix
*/