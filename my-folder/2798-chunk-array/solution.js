/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

var chunk = function(arr, size) {
    let newArray = []
    let numberOfTimes = Math.ceil(arr.length / size)
    let currentIndex = 0
    for (let i = 0; i < numberOfTimes; i++) {
        newArray.push(arr.slice(currentIndex, currentIndex + size))
        currentIndex += size
    }
    return newArray
};
