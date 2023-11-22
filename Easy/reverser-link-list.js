
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     let tail = null;

//     while(head) {
//         const temp = head.next;
//         head.next = tail;
//         tail = head;
//         head = temp;
//     }

//     return tail;
// };

// Time complexity: O(n)
// Space complexity: O(n)

var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }

    const reversedList = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return reversedList;
};

console.log(reverseList(node))