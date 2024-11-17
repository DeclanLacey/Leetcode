/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numSet = new Set()
        for (let i = 0; i < nums.length; i++) {
            numSet.add(nums[i])
        }

        if (numSet.size < nums.length) return true
        return false
};