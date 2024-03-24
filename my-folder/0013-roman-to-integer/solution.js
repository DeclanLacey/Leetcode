/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanNums = [
        {"roman": "I", "num": 1},
        {"roman": "V", "num": 5},
        {"roman": "X", "num": 10},
        {"roman": "L", "num": 50},
        {"roman": "C", "num": 100},
        {"roman": "D", "num": 500},
        {"roman": "M", "num": 1000},
        {"roman": "IV", "num": 4},
        {"roman": "IX", "num": 9},
        {"roman": "XL", "num": 40},
        {"roman": "XC", "num": 90},
        {"roman": "CD", "num": 400},
        {"roman": "CM", "num": 900}

    ]
    let exceptions = ["IV", "IX", "XL", "XC", "CD", "CM"]
    let totalNum = 0

    for (let i = 0; i < s.length; i++) {
        
        if (exceptions.includes(s[i] + s[i + 1])) {
            let currentObject = romanNums.find(el => el.roman === (s[i] + s[i + 1]))
            totalNum += currentObject.num
        }else if (exceptions.includes(s[i - 1] + s[i])){
            /// This conditonal skips the current iteration if it is the tail end of the exception roman numeral
        }else {
            let currentObject = romanNums.find(el => el.roman === s[i])
            totalNum += currentObject.num
        }
        
    }

    return totalNum
};


