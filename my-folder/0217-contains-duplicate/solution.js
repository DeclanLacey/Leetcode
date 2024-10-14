/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b)
    function slidingDoorSearch() {
        let foundDuplicate = false
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i + 1]) {
                foundDuplicate = true
                break
            }
        }
        return foundDuplicate
    }

    return slidingDoorSearch()
};
