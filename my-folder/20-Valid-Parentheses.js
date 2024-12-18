/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []

        const parens = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for (let paren of s) {
            if (parens[paren]) {
                if (stack.length > 0 && stack[stack.length - 1] === parens[paren]) {
                    stack.pop()
                }else {
                    return false
                }
            }else {
                stack.push(paren)
            }
        }

        return stack.length === 0
};