                            // I need to check this.


function flippingMatrix(matrix) {
    let total = 0
    let temptotal = 0
    // Normal Check
    tempMatrix = matrix
    maxTotal()
    // Flip first row
    tempMatrix[0] = tempMatrix[0].reverse()
    maxTotal()
    // Flip Second Row
    tempMatrix[1] = tempMatrix[1].reverse()
    maxTotal()
    // Reset
    tempMatrix = matrix

    // flip third column
    tempMatrix[0][2] = tempMatrix[3][2]
    tempMatrix[1][2] = tempMatrix[2][2]
    //Flip first row
    tempMatrix[0] = tempMatrix[0].reverse()
    maxTotal()
    // Reset
    tempMatrix[0] = tempMatrix[0].reverse()
    // Flip Second Row
    tempMatrix[1] = tempMatrix[1].reverse()
    maxTotal()
    // Flip First and Second Row
    tempMatrix[0] = tempMatrix[0].reverse()
    maxTotal()
    // RESET
    tempMatrix = matrix

    // flip fourth column
    tempMatrix[0][3] = tempMatrix[3][3]
    tempMatrix[1][3] = tempMatrix[2][3]
    //Flip first row
    tempMatrix[0] = tempMatrix[0].reverse()
    maxTotal()
    // Reset
    tempMatrix[0] = tempMatrix[0].reverse()
    // Flip Second Row
    tempMatrix[1] = tempMatrix[1].reverse()
    maxTotal()
    // Flip First and Second Row
    tempMatrix[0] = tempMatrix[0].reverse()
    maxTotal()
    // RESET
    tempMatrix = matrix

    // flip third and fourth
    // flip third column
    tempMatrix[0][2] = tempMatrix[3][2]
    tempMatrix[1][2] = tempMatrix[2][2]
    // Flip Fourth column
    tempMatrix[0][3] = tempMatrix[3][3]
    tempMatrix[1][3] = tempMatrix[2][3]
    tempMatrix[0] = tempMatrix[0].reverse()
    tempMatrix[1] = tempMatrix[1].reverse()
    maxTotal()


    function maxTotal(){
        if(total < (tempMatrix[0][0] + tempMatrix[0][1] + tempMatrix[1][0] + tempMatrix[1][1])){
            total = tempMatrix[0][0] + tempMatrix[0][1] + tempMatrix[1][0] + tempMatrix[1][1]
        }
    }
}

flippingMatrix( [[112, 42, 83, 119],[56, 125, 56, 49],[15, 78, 101, 43],[62, 98, 114, 108]] )


/*
https://www.hackerrank.com/interview/preparation-kits/one-week-preparation-kit/one-week-day-two/challenges


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