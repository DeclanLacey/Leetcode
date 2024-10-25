/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let response = 0
        let count = new Map()
        let left = 0

        for (let right = 0; right < s.length; right++) {
            let length = right - left + 1
            count.set(s[right], 1 + (count.get(s[right]) || 0))

            if (length - Math.max(...count.values()) > k) {
                count.set(s[left], count.get(s[left]) - 1)
                left++
            }

            length = right - left + 1
            response = Math.max(response, length)
        }

        return response
};