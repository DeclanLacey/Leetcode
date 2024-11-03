/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = {}

        for (let string of strs) {
            const count = new Array(26).fill(0)
            for (let char of string) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            
            const key = count.join(',')
            if (!res[key]) {
                res[key] = []
            }

            res[key].push(string)
        }

        return Object.values(res)
};