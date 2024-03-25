/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let firstFoundIndex = -1 

    if (haystack.includes(needle) === false) {
        return firstFoundIndex
    }else {
        firstFoundIndex = haystack.indexOf(needle)
    }
    
    return firstFoundIndex
    
};
