/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cachedValues = {}
    return function(...args) {
        if (args in cachedValues) {
            return cachedValues[args]
        }else {
            let result = fn(...args)
            cachedValues[args] = result
            return result
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
