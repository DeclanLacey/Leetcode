/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
        nums.sort((a, b) => a - b)
        let res = []
        let left = 0
        let right = nums.length - 1
        if (target < 0) {
            target = target / -1
        }

        while (res.length < 2) {
            if (nums[left] < 0 && nums[right] < 0) {
                let sum = (nums[left] / -1) + (nums[right] / -1) 
                if (sum === target) {
                    res.push(left)
                    res.push(right)
                }else if (sum > target) {
                    right--
                }else {
                    left++
                }

            }else {
                let sum = nums[left] + nums[right]
                if (sum === target) {
                    res.push(left)
                    res.push(right)
                }else if (sum > target) {
                    right--
                }else {
                    left++
                }

            }

            
        }

        return res

};