/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let hashTable = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hashTable) {
            return true
        }
        hashTable[nums[i]] = true
    }

    return false
};
