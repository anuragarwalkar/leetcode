class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  var mergeKLists = function (lists) {
    if (lists.length === 0) {
      return null;
    }
    return mergeList(lists, 0, lists.length - 1);
  };
  
  function mergeList(lists, start, end) {
    if (start === end) {
      return lists[start];
    } else if (start < end) {
      const mid = Math.floor((start + end) / 2);
  
      const leftPart = mergeList(lists, start, mid);
      const rightPart = mergeList(lists, mid + 1, end);
  
      return mergeTwoLists(leftPart, rightPart);
    }
    return null;
  }
  
  function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
  
    while (l1 != null && l2 != null) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    if (l1 !== null) {
      current.next = l1;
    } else {
      current.next = l2;
    }
  
    return dummy.next;
  }
  