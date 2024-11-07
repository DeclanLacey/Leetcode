/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head
        let fast = head.next

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let second = slow.next
        slow.next = null
        let prev = null

        while(second) {
            const temp = second.next
            second.next = prev
            prev = second
            second = temp
        }

        let first = head
        second = prev
        while (second) {
            const tempOne = first.next
            const tempTwo = second.next
            first.next = second
            second.next = tempOne
            first = tempOne
            second = tempTwo
        }
};