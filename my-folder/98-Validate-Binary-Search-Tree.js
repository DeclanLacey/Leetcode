/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function checkTree(node, left, right) {
            if (node === null) return true

            if (!(left < node.val && node.val < right)) return false

            return checkTree(node.left, left, node.val) && checkTree(node.right, node.val, right)
        }

        return checkTree(root, -Infinity, Infinity)
};