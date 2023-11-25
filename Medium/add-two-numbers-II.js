function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const listOneNode = new ListNode(2, new ListNode(4, new ListNode(3)));
const listTwoNode = new ListNode(5, new ListNode(6, new ListNode(4)));

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, rem = 0) {
    if(!l1 && !l2 && !rem) {
        return null;
    }
    const total = (l1?.val ?? 0) + (l2?.val ?? 0) + rem;
    const node = addTwoNumbers(l1?.next, l2?.next, Math.floor(total / 10))
    return new ListNode(total % 10, node);
};

const result = addTwoNumbers(listOneNode, listTwoNode);


console.log('result:', result);