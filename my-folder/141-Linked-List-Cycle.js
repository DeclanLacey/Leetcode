/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
        let readNodes = []
       let isCycle

       if (!head) {
        return false
       }

       while (isCycle === undefined) {
        if (head.next === null) {
            isCycle = false
            break
        }

        if (readNodes.includes(head.next)) {
            isCycle = true
            break
        }

        readNodes.push(head)
        head = head.next
       }

        return isCycle
};