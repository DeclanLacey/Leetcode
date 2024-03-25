/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    if (digits[digits.length - 1] < 9) {
        digits.splice((digits.length - 1), 1, digits[digits.length - 1] + 1)
    }else {
        let numberOfNines = 0
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] === 9) {
                numberOfNines++
            }else {
                break
            }
        }
        
        if (numberOfNines === digits.length) {
            digits.splice(0, digits.length, 1)
            for (let i = 0; i < numberOfNines; i++) {
                digits.push(0)
            }
        }else {
            digits.splice(digits.length - numberOfNines, numberOfNines)
            digits.splice(digits.length - 1, 1, digits[digits.length - 1] + 1)

            for (let i = 0; i < numberOfNines; i++) {
                digits.push(0)
            }
        }

       
    }

    return digits 
};
