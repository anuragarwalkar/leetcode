class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    enqueue(value) {
        this.values.push(value);
        this._bubbleUp();
    }

    _bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2) 
            const parent = this.values[parentIndex];

            if(element <= parent) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    dequeue() {
        const max = this.values[0];
        const last = this.values.pop();
        this.values[0] = last;
        this._bubbleDown();
        return max;
    }

    _bubbleDown() {
        let index = 0;

        while(index < this.values.length) {
            let leftChildIndex = Math.floor(2 * index + 1);
            let rightChildIndex = Math.floor(2 * index + 2);
            let leftChild = this.values[leftChildIndex];
            let rightChild = this.values[rightChildIndex];
            
            let swap = false;
            
            if(leftChild > this.values[index]) {
                this.values[leftChildIndex] = this.values[index];
                this.values[index] = leftChild;
                index = leftChildIndex;
                swap = true;
            }else if(rightChild > this.values[index]) {
                this.values[rightChildIndex] = this.values[index];
                this.values[index] = rightChild;
                index = rightChildIndex;
                swap = true;
            }

            if(!swap) {
                break;
            }
            
        }
    }

}