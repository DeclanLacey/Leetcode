/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        let letterSet = new Set()
        let left = 0
        let max = 0

        for (let right = 0; right < s.length; right++) {
            while (letterSet.has(s[right])) {
                letterSet.delete(s[left])
                left++
            }

            letterSet.add(s[right])
            if (letterSet.size > max) max = letterSet.size
        }

        
        return max
};