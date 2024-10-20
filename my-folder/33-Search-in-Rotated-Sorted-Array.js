/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            const midNum = nums[mid]
            const leftNum = nums[left]
            const rightNum = nums[right]

            if (target === midNum) return mid;

            if (leftNum <= midNum) {
                if (target > midNum || target < leftNum) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                if (target < midNum || target > rightNum) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        return -1;
};