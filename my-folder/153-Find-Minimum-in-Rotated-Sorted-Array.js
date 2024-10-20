/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0
        let right = nums.length - 1

        while (left < right) {
            const mid = (left + right) >> 1
            const midNum = nums[mid]
            const leftNum = nums[left]
            const rightNum = nums[right]

            
            console.log(\Left: \, leftNum)
            console.log(\Mid: \, midNum)
            console.log(\Right: \, rightNum)

            if (leftNum < rightNum) return leftNum
            if (leftNum <= midNum) left = mid + 1
            if (midNum < leftNum) right = mid
        }

        return nums[left]
};