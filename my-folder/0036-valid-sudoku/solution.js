/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let valid = true;
    let rowsValid = true;
    let columnsValid = true;

    for (let i = 0; i < board.length; i++) {
        let numsRows = []
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] != ".") {
                numsRows.push(board[i][j])
            }
        }

        let rowsSet = Array.from(new Set(numsRows))
        if (rowsSet.length === numsRows.length) {
            rowsValid = true
        }else {
            valid = false
            break
        }


        let numsColumns = []
        for (let k = 0; k < board[i].length; k++) {
            if (board[k][i] != ".") {
                numsColumns.push(board[k][i])
            }
        }

        let columnsSet = Array.from(new Set(numsColumns))
        if (columnsSet.length === numsColumns.length) {
            columnsValid = true
        }else {
            valid = false
            break
        }
    }


    if (valid === true) {
        for (let i = 0; i < board.length; i += 3) {

            let threeByThreeNums = []
            
            for (let j = 0; j < board[i].length; j += 3) {
                threeByThreeNums.push(board[i][j])
                threeByThreeNums.push(board[i][j + 1])
                threeByThreeNums.push(board[i][j + 2])            
    
                threeByThreeNums.push(board[i + 1][j])
                threeByThreeNums.push(board[i + 1][j + 1])
                threeByThreeNums.push(board[i + 1][j + 2])
                
    
                threeByThreeNums.push(board[i + 2][j])
                threeByThreeNums.push(board[i + 2][j + 1])
                threeByThreeNums.push(board[i + 2][j + 2])
    
            
                threeByThreeNums = threeByThreeNums.filter((item) => item != ".")
                let threeByThreeNumsSet = Array.from(new Set(threeByThreeNums))
                if (threeByThreeNumsSet.length != threeByThreeNums.length) {
                    valid = false;
                    break
                }
                threeByThreeNums = []
            }
            
        }
    }

    return valid
};
