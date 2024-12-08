/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let left = 0;

    for (let right = 0; right < prices.length; right++) {
        if (prices[right] < prices[left]) {
            left = right
        }

        if (prices[right] - prices[left] > maxProfit) {
            maxProfit = prices[right] - prices[left] 
        }
    }
    return maxProfit
};