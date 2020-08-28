/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let digits = [];

    let headNode = new ListNode(0, null);
    let pointerNode = headNode;

    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;

        carry = Number.parseInt(sum / 10);
        sum = sum % 10;
        console.log('sum::', sum)

        pointerNode.next = new ListNode(sum, null);
        pointerNode = pointerNode.next;

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    return headNode.next;
};