class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(num) {
        this.heap.push(num);
        this._heapifyUp();
    }

    extract() {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return max;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] > this.heap[parentIdx]) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    _heapifyDown() {
        let idx = 0;
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let largestIdx = idx;

            if (leftChildIdx < this.heap.length && this.heap[leftChildIdx] > this.heap[largestIdx]) {
                largestIdx = leftChildIdx;
            }
            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] > this.heap[largestIdx]) {
                largestIdx = rightChildIdx;
            }

            if (largestIdx !== idx) {
                [this.heap[idx], this.heap[largestIdx]] = [this.heap[largestIdx], this.heap[idx]];
                idx = largestIdx;
            } else {
                break;
            }
        }
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(num) {
        this.heap.push(num);
        this._heapifyUp();
    }

    extract() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] < this.heap[parentIdx]) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    _heapifyDown() {
        let idx = 0;
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let smallestIdx = idx;

            if (leftChildIdx < this.heap.length && this.heap[leftChildIdx] < this.heap[smallestIdx]) {
                smallestIdx = leftChildIdx;
            }
            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] < this.heap[smallestIdx]) {
                smallestIdx = rightChildIdx;
            }

            if (smallestIdx !== idx) {
                [this.heap[idx], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[idx]];
                idx = smallestIdx;
            } else {
                break;
            }
        }
    }
}

class MedianFinder {
    constructor() {
        this.leftHeap = new MaxHeap(); // Max heap for smaller half
        this.rightHeap = new MinHeap(); // Min heap for larger half
    }

    addNum(num) {
        if (this.leftHeap.isEmpty() || num <= this.leftHeap.peek()) {
            this.leftHeap.insert(num);
        } else {
            this.rightHeap.insert(num);
        }

        // Balance the heaps
        if (this.leftHeap.size() > this.rightHeap.size() + 1) {
            this.rightHeap.insert(this.leftHeap.extract());
        } else if (this.rightHeap.size() > this.leftHeap.size()) {
            this.leftHeap.insert(this.rightHeap.extract());
        }
    }

    findMedian() {
        if (this.leftHeap.size() === this.rightHeap.size()) {
            return (this.leftHeap.peek() + this.rightHeap.peek()) / 2;
        } else {
            return this.leftHeap.peek();
        }
    }
}


// Example usage
const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(4);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); 