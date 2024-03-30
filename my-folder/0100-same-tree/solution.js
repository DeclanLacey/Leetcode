/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let treeOne = []
    let treeTwo = []
    let areSameTree = false

    function traverseNode(node, treeArray) {
        if (node === null) {
            return
        }

        treeArray.push(node.val)

        if (node.left) {
            traverseNode(node.left, treeArray)
        }else if (node.left === null) {
            treeArray.push(null)
        }

        treeArray.push(node.val)

        if (node.right) {
            traverseNode(node.right, treeArray)
        }else if (node.right === null) {
            treeArray.push(null)
        }

        treeArray.push(node.val)
    }

    traverseNode(p, treeOne)
    traverseNode(q, treeTwo)

    if (treeOne.length === treeTwo.length) {
        if (treeOne.length === 0) {
            areSameTree = true
        }else {
            for (let i = 0; i < treeOne.length; i++) {
                if (treeOne[i] === treeTwo[i]) {
                    areSameTree = true
                    continue
                }else {
                    areSameTree = false
                    break
                }
            }
        }
    }

    return areSameTree

};
