class MinBinaryHeap {
    
    constructor() {
        this.values = [];
    }

    size() {
        return this.values.length;
    }

    front() {
        return this.values[0];
    }

    enqueue(value) {
        this.values.push(value);

        this._bubbleUp();
    }

    _bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];
        
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex];

            if(parent <= element) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;

            index = parentIndex;
        }
    }

    dequeue() {
       const min = this.values[0];
       this.values[0] = this.values.pop();
        this._bubbleDown();
       return min;
    }

    _bubbleDown() {
       let index = 0; 

       while(index < this.values.length) {
        let leftChildIndex = Math.floor(2 * index + 1);
        let rightChildIndex = Math.floor(2 * index + 2);
        let rightChild = this.values[rightChildIndex];
        let leftChild = this.values[leftChildIndex];

        let swap = index;

        if(rightChildIndex < this.values.length && rightChild < this.values[swap]) {
            swap = rightChildIndex;
        }
        
        if(leftChildIndex < this.values.length && leftChild < this.values[swap]) {
            swap = leftChildIndex;
        }

        if(swap === index) {
            break
        }else {
            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]]
            index = swap;
        }
       }
    }
}

var findKthLargest = function(nums, k) {
    const minHeap = new MinBinaryHeap();

    for(let num of nums) {
        minHeap.enqueue(num);

        if (minHeap.size() > k) {
        minHeap.dequeue();
        }
    }

    return minHeap.front();
};

console.log(findKthLargest([3,2,1,5,6,4], 2))