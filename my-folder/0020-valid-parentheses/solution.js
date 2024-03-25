/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let correctParens = ["()", "[]", "{}"]

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])

        let lastTwo = stack[stack.length - 2] + stack[stack.length - 1]

        if (correctParens.includes(lastTwo)) {
            stack.pop()
            stack.pop()
        }
    }

    return stack.length === 0
};
