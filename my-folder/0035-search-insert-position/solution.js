/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            index = i
        }else if (nums[i] < target && nums[i + 1] > target) {
            index = i + 1
        }else if (i === nums.length - 1 && nums[i] < target) {
            index = i + 1
        }else if (i === 0 && nums[i] > target) {
            index = i
        }
    }

    return index
};
