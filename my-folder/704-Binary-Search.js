/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let mid;
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2)
        if (target === nums[mid]) {
            return mid
        }else if (target > nums[mid]) {
            left = mid + 1
        }else if (target < nums[mid]) {
            right = mid - 1
        }
    }

    return -1
};