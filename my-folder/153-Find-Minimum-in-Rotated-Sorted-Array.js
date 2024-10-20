/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] < nums[i]) {
            return nums[i + 1]
        }if (i === nums.length - 1) {
            return nums[0]
        }
    }
};