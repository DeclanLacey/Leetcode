/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let wordArray = []
    wordArray = s.split(" ")

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === "") {
            wordArray.splice(i, 1)
            i--
        }
    }

    return wordArray[wordArray.length - 1].length
};
