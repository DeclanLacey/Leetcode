/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let strings = strs.map((str) => str.split("").sort().join(""))
   
    let results = {}

    for (let i = 0; i < strings.length; i++) {
        if (strings[i] in results) {
            results[strings[i]].push(strs[i])
        }else {
            results[strings[i]] = [strs[i]]
        }
    }

    return Object.values(results)


};
