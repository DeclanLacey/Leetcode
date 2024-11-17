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
 * @return {number[][]}
 */
var levelOrder = function(root) {
      let res = []
        if (!root) return res

        const q = new Queue()
        q.push(root)

        while (!q.isEmpty()) {
            let level = []

            for (let i = q.size(); i > 0; i--) {
                let node = q.pop()
                if (node !== null) {
                    level.push(node.val)
                    q.push(node.left)
                    q.push(node.right)
                }
            }

            if (level.length > 0) {
                res.push(level)
            }
        }

        return res
};