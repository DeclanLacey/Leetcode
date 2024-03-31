/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let lowerCaseString = s.toLowerCase()
    let alphaOnlyString = ""
    let backwardsStringArray = []
    let alphaOnlyStringBackwards = ""

    for (let i = 0; i < lowerCaseString.length; i++) {
        if (/[a-z0-9]/.test(lowerCaseString[i])) {
            alphaOnlyString += lowerCaseString[i]
        }
    }
    
    for (let i = 0; i < alphaOnlyString.length; i++) {
        backwardsStringArray.push(alphaOnlyString[i])
    }

    backwardsStringArray.reverse()

    for (let i = 0; i < backwardsStringArray.length; i++) {
        alphaOnlyStringBackwards += backwardsStringArray[i]
    }

    if (alphaOnlyString === alphaOnlyStringBackwards) {
        return true
    }else {
        return false
    }

};
