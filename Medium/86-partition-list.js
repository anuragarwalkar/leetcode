import { convertArrayToLinkList } from "../utils";

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let leftHalf = new ListNode(0);
    let leftHalfTail = leftHalf;
    let rightHalf = new ListNode(0);
    let rightHalfTail = rightHalf;

    while(head) {
        if(head.val < x) {
            leftHalfTail.next = new ListNode(head.val);
            leftHalfTail = leftHalfTail.next;
        }else {
            rightHalfTail.next = new ListNode(head.val);
            rightHalfTail = rightHalfTail.next;
        }

        head = head.next;
    }

    leftHalfTail.next = rightHalf.next;



   return leftHalf.next;
};

console.log(JSON.stringify(partition(convertArrayToLinkList([1,4,3,2,5,2]), 3)))