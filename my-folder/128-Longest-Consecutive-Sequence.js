/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let left = 0
        let right = 1
        let maxCount = 1
        let currentCount = 1

        if (nums.length === 0) return 0
        let numSet = new Set(nums)
        numSet = Array.from(numSet).sort((a, b) => a - b)
        
        while (right < nums.length) {
            if (numSet[left] + 1 === numSet[right]) {
                left++
                right++
                currentCount++
            }else {
                left++
                right++
                currentCount = 1
            }

            if (currentCount > maxCount) {
                maxCount = currentCount
            }

        }

        return maxCount
};