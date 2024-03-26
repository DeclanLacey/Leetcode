/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let subtractionNum = 1
    let numberOfSubtractions = 0
    let originalNum = x
    while (originalNum >= 0) {
    originalNum = originalNum - subtractionNum
    numberOfSubtractions++
    subtractionNum += 2
    }
     return numberOfSubtractions - 1
};
