/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

        const countOne = {}
        const countTwo = {}

        for (let i = 0; i < s.length; i++) {
            countOne[s[i]] = (countOne[s[i]] || 0) + 1
            countTwo[t[i]] = (countTwo[t[i]] || 0) + 1
        }

        for (const key in countOne) {
            if (countOne[key] !== countTwo[key]) {
                return false
            }
        }

        return true
        
};