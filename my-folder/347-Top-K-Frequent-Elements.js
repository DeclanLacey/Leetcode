/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numMap = new Map()
        let numArray = []
        let res = []

        for (let i = 0; i < nums.length; i++) {
            if (numMap.has(nums[i])) {
                let currentValue = numMap.get(nums[i])
                numMap.set(nums[i], currentValue + 1)
            }else {
                numMap.set(nums[i], 1)
            }
        }

        numArray = [...numMap.entries()]
        numArray.sort((a, b) => b[1] - a[1])

        for (let i = 0; i < k; i++) {
            res.push(numArray[i][0])
        }

        return res

};