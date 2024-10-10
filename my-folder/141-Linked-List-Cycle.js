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
      let next = null
        let currentIndexs = []
        let isCycle = false

        if (!head) {
            return isCycle
        }

        do{
            next = head.next
            if (currentIndexs.includes(next)) {
                isCycle = true
                break
            }
            currentIndexs.push(next)
            head = head.next
        } while (next)

        return isCycle
};