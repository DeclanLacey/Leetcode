/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.split(\\).filter((char) => isAlphaNumeric(char)).join(\\).toLowerCase()
    let palindrome = true
    let indexOne = 0
    let indexTwo = string.length - 1

    while (true) {

        if (indexOne > indexTwo) {
            break
        }

        if (string[indexOne] === string[indexTwo]) {
            indexOne += 1
            indexTwo -= 1
            continue
        }else if (string[indexOne] != string[indexTwo]) {
            palindrome = false
            break
        }
        
    }

    function isAlphaNumeric(char) {
        const code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) || // 0-9
            (code >= 65 && code <= 90) || // A-Z
            (code >= 97 && code <= 122) // a-z
        );
    }

    return palindrome
};