/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    let fib = [1, 1]
    
    if (n === 1) {
        return 1
    }else {
        for(let i = 2; i <= n; i++) {
            fib[i] = fib[i - 2] + fib [i - 1]
            if (i === n) {
                return fib[i]
            }
        }
    }
    
};
