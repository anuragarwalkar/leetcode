import { ListNode, convertArrayToLinkList } from "./utils.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var sortList = function(head) {
//     const unsorted = [];

//     let node = head;
//     while(node) {
//         unsorted.push(node.val);
//         node = node.next;
//     }

//     unsorted.sort((a, b) => a - b);
//     const sortedLinkedList = new ListNode(0);
//     let tail = sortedLinkedList;
//     unsorted.forEach(item => {
//         tail.next = new ListNode(item);
//         tail = tail.next;
//     });

//     return sortedLinkedList.next;
// };

const getMiddle = (head) => {
    let slow = head;
    let fast = head.next;

    while(fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

  return slow;
}

const merge = (left, right) => {
    let dummy = new ListNode(0);
    let tail = dummy;

    while(left && right) {
        if(left.val < right.val) {
            tail.next = left;
            left = left.next;
        }else {
            tail.next = right;
            right = right.next;
        }

        tail = tail.next;
    }

    if(left) {
        tail.next = left;
    }

    if(right) {
        tail.next = right;
    }

    return dummy.next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head || !head.next) {
        return head;
    }

    // Split in half
    let left = head;
    let right = getMiddle(head);
    let temp = right.next;
    right.next = null;
    right = temp;

    left = sortList(left);
    right = sortList(right);

    return merge(left, right);
};

console.log(sortList(convertArrayToLinkList([4,2,1,3])));