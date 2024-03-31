/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   
    if (s.length != t.length) {
        return false
    }

    let hashTableOne = {}

    for (let i = 0; i < s.length; i++) {
        if (s[i] in hashTableOne) {
            hashTableOne[s[i]] = hashTableOne [s[i]] + 1
        }else {
            hashTableOne[s[i]] = 1
        }
        
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] in hashTableOne) {
            hashTableOne[t[i]] = hashTableOne[t[i]] - 1
        }

        if (hashTableOne[t[i]] === 0) {
            delete hashTableOne[t[i]]
        }
        
    }

    if (JSON.stringify(hashTableOne) === "{}") {
        return true
    }else {
        return false
    }

};
