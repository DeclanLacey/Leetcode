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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    

    function traverseTree(node) {
        if (node === null) {
            return
        }
        let leftHolder = node.left
        node.left = node.right
        node.right = leftHolder

        if (node.left === null && node.right === null) {
            return node
        }
        traverseTree(node.right)
        traverseTree(node.left)
    }

    traverseTree(root)

    return root
};
