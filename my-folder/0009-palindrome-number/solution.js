/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let input = x
    input = input.toString()

    let xAsArray = []
    let backwards = ""
    for (let i = 0; i < input.length; i++) {
        xAsArray.push(input[i])
    }
    xAsArray = xAsArray.reverse()

    for (let i = 0; i < xAsArray.length; i++) {
        backwards += xAsArray[i]
    }
   
    if (input === backwards) {
        return true
    }else {
        return false
    }

    
};

