class MinBinaryHeap {
    constructor() {
        this.values = [];
    }

    enqueue(value) {
        this.values.push(value);
        this._bubbleUp();
    }

    _bubbleUp() {
        let index = this.values.length - 1;
        let value = this.values[index];

        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if(value >= parent) break;

            this.values[parentIndex] = value;
            this.values[index] = parent;

            index = parentIndex;
        }
    }

    dequeue() {
        if(!this.values.length) {
            return null;
        }

        let min = this.values[0];
        const lastValue = this.values.pop();

        if(!this.values.length) {
            return min;
        }
        
        this.values[0] = lastValue;
        this._bubbleDown();
        return min;
    }

    _bubbleDown() {
        let index = 0;
        let value = this.values[index];

        while(index < this.values.length) {
            let leftChildIndex = (index * 2) + 1;
            let rightChildIndex = (index * 2) + 2;
            let leftChild = this.values[leftChildIndex];
            let rightChild = this.values[rightChildIndex];

            if(value > leftChild && leftChild < rightChild) {
                this.values[leftChildIndex] = value;
                this.values[index] = leftChild
                index = leftChildIndex;
            }else if(value > rightChild && rightChild < leftChild) {
                this.values[rightChildIndex] = value;
                this.values[rightChildIndex] = value;
                this.values[index] = rightChild;
                index = rightChildIndex;
            }else {
                break
            }

        }
    }

}

const instance = new MinBinaryHeap();

instance.enqueue(100);
instance.enqueue(10);
instance.enqueue(200);
instance.enqueue(500);


instance.dequeue();
instance.dequeue();
instance.dequeue();
instance.dequeue();

console.log('instance:', instance.values);