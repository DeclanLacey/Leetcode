/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = [[1], [1,1]]

    if (numRows === 1) {
        output = [[1]]
    }
    for (let i = 1; i < numRows - 1; i++) {
        let newRow = [1,1]
        for (let j = 0; j < output[i].length - 1; j++) {
            newRow.splice(j + 1, 0, output[i][j] + output[i][j + 1])
        } 
        output.push(newRow)

    }
    return output
};
