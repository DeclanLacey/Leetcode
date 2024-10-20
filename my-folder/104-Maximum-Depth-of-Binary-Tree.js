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
 * @return {number}
 */
var maxDepth = function(root) {
    function traverseTree(node) {
            if (!node) return 0
            return 1 + Math.max(traverseTree(node.left), traverseTree(node.right))
        }

        return traverseTree(root)
};