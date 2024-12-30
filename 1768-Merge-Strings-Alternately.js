/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = ""
    let left = 0
    let right = 0

    while(word1[left] || word2[right]) {
        if (word1[left]) {
            res += word1[left]
            left++
        }
        if (word2[right]) {
            res += word2[right]
            right++
        }
    }

    return res
};