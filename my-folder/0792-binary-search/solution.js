/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let returnValue = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            returnValue = i
            break
        }
    }

    return returnValue
};
