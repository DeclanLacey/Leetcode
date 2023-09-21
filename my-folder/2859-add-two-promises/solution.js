/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return new Promise(async (resolve, reject) => {
        const numOne = await promise1
        const numTwo = await promise2
        const addedNums = await numOne + numTwo
        resolve(addedNums)
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
