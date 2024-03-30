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

    function traverse(node) {
        if (node === null) {
            return 0
        }else {

            let rightDepth = traverse(node.right)
            let leftDepth = traverse(node.left)

            if (rightDepth > leftDepth) {
                return rightDepth + 1
            }else {
                return leftDepth + 1
            }
        }
    }

    return traverse(root)

   

};
