/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let remainingTarget = target - num
        let sumIndex = map.get(remainingTarget)

        if (sumIndex || sumIndex === 0) return [i, sumIndex]

        map.set(num, i)
    }
};