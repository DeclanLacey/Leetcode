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
var isSymmetric = function(root) {

    let areSym = true
    
    function traverse(node1, node2) {

        if (!node1 && !node2) {
            return;
        }

        if (!node1 || !node2 || node1.val !== node2.val) {
            areSym = false;
            return;
        }

        traverse(node1.left, node2.right)
        traverse(node1.right, node2.left)

    }

    traverse(root, root)

    return areSym

};
