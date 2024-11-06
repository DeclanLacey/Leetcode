/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
     let maxWater = 0
        let left = 0
        let right = height.length - 1

        while (left < right) {
            let waterLevel = Math.min(height[left], height[right]) * (right - left)
            if (waterLevel > maxWater) maxWater = waterLevel

            if (height[left] < height[right]) {
                left++
            }else if (height[left] > height[right]) {
                right--
            }else {
                right--
                left++
            }
        }

        return maxWater
};