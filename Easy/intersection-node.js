


function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

const intersectionLinkedList = new ListNode(8, new ListNode(4, new ListNode(5)))

const rootA = new ListNode(4, new ListNode(1, intersectionLinkedList));
const roobB = new ListNode(5, new ListNode(6, new ListNode(1, intersectionLinkedList) ));

// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  */
// var getIntersectionNode = function (headA, headB) {
//     const visitedNodesHeadA = new Map()
//     const visitedNodesHeadB = new Map()

//     while (headA || headB) {
//         visitedNodesHeadA.set(headA);
//         visitedNodesHeadB.set(headB);

//         if (visitedNodesHeadA.has(headB)) {
//             return headB
//         }

//         if (visitedNodesHeadB.has(headA)) {
//             return headA;
//         }

//         headA = headA?.next;
//         headB = headB?.next;
//     }

//     return null;
// };

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let node1 = headA;
    let node2 = headB;

    while(node1 !== node2) {
        node1 = node1.next ?? headB;
        node2 = node2.next ?? headA;
    }

    return node1;
};

// console.log(getIntersectionNode(temp, temp));
console.log(getIntersectionNode(rootA, roobB));