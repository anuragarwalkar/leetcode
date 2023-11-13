function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const list1Node  = new ListNode(1, new ListNode(2, new ListNode(4)))
const list2Node = new ListNode(1, new ListNode(3, new ListNode(4)))

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let tail = head;

    while(list1 && list2) {

        if(list1.val > list2.val) {
            tail.next = list2;
            list2 = list2.next;
        }else {
            tail.next = list1;
            list1 = list1.next;
        }

        tail = tail.next;
    }

    tail.next = list1 || list2;

    return head.next;
};  


console.log(mergeTwoLists(list1Node, list2Node))