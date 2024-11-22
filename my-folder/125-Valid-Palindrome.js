/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0
        let right = s.length - 1
        let res = true

        while (left < right) {
            console.log(s[left])
            console.log(s[right])
            while (!/^[a-z0-9]+$/i.test(s[left])) {
                left++
            }
            while (!/^[a-z0-9]+$/i.test(s[right])) {
                right--
            }

            if (!s[left] || !s[right]) {
                res = true
                break
            }
            
            if (s[left].toLowerCase() === s[right].toLowerCase()) {
                left++
                right--
            }else {
                res = false
                break
            }
        }

        return res
};