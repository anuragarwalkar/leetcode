function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// const node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
const node = new ListNode(5)

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0, head);

    let leftPrev = dummy;
    let current = head;

    for(let i = 0; i < left - 1; i++) {
        leftPrev = current;
        current = current.next;
    }

    let prev = null;
    for(let  i = 0; i < right - left + 1; i++) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    leftPrev.next.next = current;
    leftPrev.next = prev;
    
    return dummy.next;
};

console.log(JSON.stringify(reverseBetween(node, 1, 1)))
// console.log(JSON.stringify(reverseBetween(node, 1, 1)))