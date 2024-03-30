/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let pascalsTriangle = [[1], [1,1]]

    for (let i = 1; i < rowIndex; i++) {
        

        let newRow = [1, 1]
        for (let j = 0; j < pascalsTriangle[i].length - 1; j++) {
            newRow.splice(j + 1, 0, pascalsTriangle[i][j] + pascalsTriangle[i][j + 1])
        }
        pascalsTriangle.push(newRow)
    }


    let output = pascalsTriangle[rowIndex]

    return output
};
