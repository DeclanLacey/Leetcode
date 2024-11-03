/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = {};

        for (let string of strs) {
            const sortedString = string.split('').sort().join('')
            if (!res[sortedString]) {
                res[sortedString] = []
            }
            res[sortedString].push(string)
        }

        return Object.values(res)
};