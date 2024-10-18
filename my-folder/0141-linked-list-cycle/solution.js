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
       let rightPointer = head
       let leftPointer = head

       while (rightPointer !== null && rightPointer.next !== null) {
            rightPointer = rightPointer.next.next
            leftPointer = leftPointer.next

            if (rightPointer === leftPointer) return true
       }

       return false
};
