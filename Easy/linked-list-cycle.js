function ListNode(val) {
    this.val = val;
    this.next = null;
}


const rootNode = new ListNode(1)
const child1 = new ListNode(2);
rootNode.next = child1;
const child2 = new ListNode(3);
child1.next = child2; 
const child3 = new ListNode(4);
child2.next = child3;
const child4 = new ListNode(5);
child3.next = child4;
const child5 = new ListNode(6);
child4.next = child5
const child6 = new ListNode(7);
child5.next = child6;
child6.next = child1
/**
 * @param {ListNode} 
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head;

    while(fast && fast.next) {
        head = head.next;
        fast = fast.next.next;

        if(fast === head) {
            return true;
        }
    }

    return false;
};

console.log(hasCycle(rootNode));
// [3,2,0,-4]