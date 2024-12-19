/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let numSet = new Set()

        for (let num of nums) {
            numSet.add(num)
        }

        if (numSet.size < nums.length) return true
        return false
};