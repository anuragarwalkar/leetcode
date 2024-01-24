class CustomPriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    enqueue(node) {
      this.heap.push(node);
      this.bubbleUp();
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Priority queue is empty");
      }
  
      const minNode = this.heap[0];
      const lastNode = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastNode;
        this.bubbleDown();
      }
  
      return minNode;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    bubbleUp() {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
  
        if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
          [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    bubbleDown() {
      let currentIndex = 0;
  
      while (currentIndex < this.heap.length) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let minChildIndex = currentIndex;
  
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[minChildIndex].priority) {
          minChildIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[minChildIndex].priority) {
          minChildIndex = rightChildIndex;
        }
  
        if (minChildIndex !== currentIndex) {
          [this.heap[currentIndex], this.heap[minChildIndex]] = [this.heap[minChildIndex], this.heap[currentIndex]];
          currentIndex = minChildIndex;
        } else {
          break;
        }
      }
    }
  }

  

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    if(!nums1.length || !nums2.length) return [];

    const priorityQueue = new CustomPriorityQueue();
    let result = [];

    for(let i = 0; i < nums1.length; i++) {
        priorityQueue.enqueue({element: [nums1[i], nums2[0]], priority: nums1[i] + nums2[0], items: [i, 0]});
    }

    while(k > 0 && !priorityQueue.isEmpty()){
        let {items: [i, j], element} = priorityQueue.dequeue();
        result.push(element);
 
        if(j + 1 < nums2.length){
            priorityQueue.enqueue({element: [nums1[i], nums2[j+1]], priority: nums1[i] + nums2[j+1], items: [i, j+1]});
        }
      k--;
    }

    // return result
};

// console.log(kSmallestPairs([1,7,11], [2,4,6], 3))
// console.log(kSmallestPairs([1,1,2], [1,1,3], 2))
console.log(kSmallestPairs([-10,-4,0,0,6], [3,5,6,7,8,100], 10))