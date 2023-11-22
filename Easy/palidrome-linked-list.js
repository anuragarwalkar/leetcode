
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const node = new ListNode(1, new ListNode(0, new ListNode(1)))

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const nodes = [];

    while (head) {
        if (head.val) {
            nodes.push(head.val);
        }

        head = head.next;
    }

    let start = 0;
    let end = nodes.length - 1;

    while (start < end) {

        if (nodes[start] !== nodes[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true
};


var isPalindrome = function(head) {
    let fast = head;
    let slow = head;

    while(fast?.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let reversed = null;

    while(slow) {
        const tempNode = slow.next;
        slow.next = reversed;
        reversed = slow;
        slow = tempNode;
    }

    while(head && reversed) {
        if(head.val !== reversed.val) {
            return false;
        }

        head = head.next;
        reversed = reversed.next;
    }

    return true;
};

console.log(isPalindrome(node))