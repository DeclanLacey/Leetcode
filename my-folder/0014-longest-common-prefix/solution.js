/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let currentPrefix = ""
    let strings = strs.sort()
    let noPrefix = false
    console.log(strings)

    for (let i = 0; i < strings[0].length; i++) {
        for (let j = 0; j < strings[strings.length - 1].length; j++) {
            if (strings[0][i] === strings[strings.length - 1][i]) {
                currentPrefix += strings[0][i]
                break
            }else {
                noPrefix = true
                break
            }
        }
        if (noPrefix) {
            break
        }
    }
    
    return currentPrefix
};


