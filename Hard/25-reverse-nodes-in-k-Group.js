import { ListNode, convertArrayToLinkList } from "./utils.js";

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummyNode = new ListNode(0, head);
    let groupPrev = dummyNode;

    function getKethNode (currentNode, k) {
        while(currentNode != null && k > 0) {
            currentNode = currentNode.next;
            k--;
        }
        return currentNode;
    }

    while(true) {
        let kth = getKethNode(groupPrev, k);
        
        if(!kth) {
            break;
        }
        let groupNext = kth.next;

        // reverse 
        let prev = kth.next;
        let node = groupPrev.next;

        while(node != groupNext) { 
            let temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;
        }
        let temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }

    return dummyNode.next;
};

reverseKGroup(convertArrayToLinkList([1,2,3,4,5]), 2);