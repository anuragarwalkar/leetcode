import { convertArrayToLinkList } from "../utils";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let result = new ListNode(0);
    let tail = result;
    let node = head;

    let duplicate = false;

    while(node) {
        if(node?.next?.val === node.val) {
            duplicate = true;
        }else {
            if(!duplicate) {
                tail.next = new ListNode(node.val)
                tail = tail.next;
            }
            duplicate = false
        }
        node = node.next;
    }

    return result.next
};

deleteDuplicates(convertArrayToLinkList([1,2,3,3,4,4,5]))