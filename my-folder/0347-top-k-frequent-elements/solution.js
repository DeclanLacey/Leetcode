/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numsObj = {}
    let numsArray = []
    let resultArray = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in numsObj) {
            numsObj[nums[i]] += 1;
        }else {
            numsObj[nums[i]] = 1
        }
    }

    for (let num in numsObj) {
        numsArray.push([num, numsObj[num]])
    }

    numsArray.sort((a, b) => b[1] - a[1])

    for (let i = 0; i < k; i++) {
        resultArray.push(parseInt(numsArray[i][0]))
    }

    return resultArray
};
