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
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if(element <= parent) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;

            index = parentIndex;
        }
    }

    dequeue() {
        const max = this.values[0];
        const lastValue = this.values.pop();

        if(this.values.length === 0) {
            return max;
        }

        this.values[0] = lastValue;
        this._bubbleDown();
        return max
    }

    _bubbleDown() {
        let index = 0;
        let value = this.values[index];
        
        while(index < this.values.length) {
            let leftChildIndex = Math.floor(index * 2) + 1;
            let righChildIndex = Math.floor(index * 2) + 2;
            
            let leftChild = this.values[leftChildIndex];
            let rightChild = this.values[righChildIndex];
            
            if(value < leftChild && leftChild > rightChild) {
                this.values[index] = leftChild;
                this.values[leftChildIndex] = value;
                index = leftChildIndex;
            }else if(value < rightChild && rightChild > leftChild) {
                this.values[index] = rightChild;
                this.values[righChildIndex] = value;
                index = righChildIndex;
            }else {
                break;
            }
}               
    }
}


const instance = new MaxBinaryHeap();

instance.enqueue(10);
instance.enqueue(100);
instance.enqueue(200);
instance.enqueue(300);
instance.enqueue(500);
instance.enqueue(1000);

// instance.dequeue();
// instance.dequeue();
// instance.dequeue();
// instance.dequeue();
// instance.dequeue();
// instance.dequeue();

console.log('instance:', instance);


