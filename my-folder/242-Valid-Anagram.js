/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let stringOne = s.split("").sort().join()
    let stringTwo = t.split("").sort().join()

    if (stringOne == stringTwo) {
        return true
    }else {
        return false
    }
        
};