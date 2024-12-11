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
     function findSameTree(nodeOne, nodeTwo) {
        if (!nodeOne && !nodeTwo) {
            return true
        }

        if (nodeOne && nodeTwo && nodeOne.val === nodeTwo.val) {
            return (
                findSameTree(nodeOne.left, nodeTwo.left) &&
                findSameTree(nodeOne.right, nodeTwo.right)
            )
        }else {
            return false
        }
        
    }

    return findSameTree(p, q)
};