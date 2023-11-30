function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
// var removeNthFromEnd = function(head, n) {
//     let node = head;
//     let totalNodeCount = 0;
    
//     while(node) {
//         totalNodeCount++;
//         node = node.next;
//     }

//     if(totalNodeCount === 1 && n === 1) {
//         return null
//     }

//     node = head;

//     let actualNode = 0;
//     let required = totalNodeCount - n;

//     let temp = head;

//     while(temp) {
//         if(required === 0) {
//             head = temp.next;
//             break;
//         }else if(actualNode === (required - 1)){
//         const nextNode = temp.next.next
//         temp.next = nextNode;
//        }
//        actualNode++;
//        temp = temp.next;
//     }

//     return head;
// };

// var removeNthFromEnd = function(head, n) {
//     let slow = head;
//     let fast = head;
    
//     while(fast) {
//         for(let i = 0; i < n; i++) {
//             fast = fast.next; 
//         }

//         slow = slow.next;

//         if(!fast?.next) {
//             break;
//         }
//     }

//     if(!fast) {
//         return slow;
//     }

//     if(!slow) {
//         return null;
//     }

//     slow.next = slow?.next?.next;

//     return head;
// };

var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0 , head);
    let left = dummy;
    let right = head;

    for(let i = 0; i < n; i++) {
        right = right.next;
    }

    while(right) {
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;

   return dummy.next;
};

// const node11 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// console.log(removeNthFromEnd(node11, 2));

// const node1 = new ListNode(1);
// console.log(removeNthFromEnd(node1, 1));

// const node2 = new ListNode(1, new ListNode(2));
// console.log(removeNthFromEnd(node2, 2));

// const node3 = new ListNode(1, new ListNode(2));
// console.log(removeNthFromEnd(node3,1));






