/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numsCount = {}
        let numSet = new Set()
        let res = []

        for (let num of nums) {
            if (numSet.has(num))  {
                numsCount[num] += 1
            }else {
                numSet.add(num)
                numsCount[num] = 1
            }
        }

        const entries = Object.entries(numsCount);
        entries.sort((a, b) => b[1] - a[1])

        for (let i = 0; i < k; i++) {
            res.push(Number(entries[i][0]))
        }
        
        return res

};