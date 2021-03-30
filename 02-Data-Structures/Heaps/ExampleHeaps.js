//You don't need to construct a node class because of the binary nature and array ordering
//Left child: i*2
//Right child: i*2+1
//Parent: i/2

class MinHeap {
    //Construct the heap by initializing an empty array with a null value already in it.
    //The null value is a simple way to offest 0 to 1 to enable the left,right,parent finder formulas.
    constructor () {
        this.heap = [null]
    };

    //Method to return the minimum value, which is the root in a MinHeap.
    getMin () {
        return this.heap[1]
    };

    //Method to insert any number and have it automatically bubble to the right position
    insert (num) {      
        //Push the value into the heap  
        this.heap.push(num)
        //If the heap has at least 3 elements, it must have two numbers. Therefore it must be bubbled.
        if (this.heap.length > 2) {
            //Grab the index of the most recent addition (the value just pushed) and store the index as a pointer
            let current = this.heap.length - 1
            //While value of the parent node is greater than the value of the current node the mind heap condition is not satisfied.
            while (this.heap[Math.floor(current/2)] > this.heap[current]) {
                //So bubble up by swapping the parent with the current
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                //Change the pointer value to the index of the parent because the positions are now switched
                //This way, the while loop re-checks the value that was added with it's next parent
                current = Math.floor(current/2)
            };
        };
    };

    //Method to remove the minimum value
    removeMin() {
        //If the heap has more than just one number in it
        if (this.heap.length > 2) {
            //Swap the root node with the most recently entered value
            this.heap[1] = this.heap[this.heap.length-1]
            //Splice off the value in the final index position (the old minimum)
            this.heap.splice(this.heap.length - 1)
            //If the heap only contains two numbers after deletion
            if (this.heap.length === 3) {
                //Then figure out which number is higher and swap if needed
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return 
            };

            //Establish pointers for the case of more than two remaining values.
            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1

            //While the heap has non-null children and the current value (root) is greater than either child
            while (this.heap[leftChildIndex] && this.heap[rightChildIndex] && 
            (this.heap[current] > this.heap[leftChildIndex] ||this.heap[current] > this.heap[rightChildIndex])) {
                //If the heap's left child is smaller than the right child
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    //Then bubble down the current value to the left child
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]];
                    //Set the pointer to the left child to continue the while loop
                    current = leftChildIndex
                //Else the right child is smaller than the left child
                } else {
                    //Then bubble down the current value to the right child
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                    //Set the pointer to the right child to continue the while loop
                    current = rightChildIndex
                };
                //Point the left and right children to the right place again
                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            };
        }
        //If there are only two elements in the array just splice out the first element      
        else if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else {
            return null
        }
        return 
    };
};


//MAXHEAPS ARE JUST THE INVERSE OPERATORS OF ALL THE LOGIC IN HERE

//Test cases for the minheap
const heap = new MinHeap();
heap.insert(300);
heap.insert(4);
heap.insert(15);
heap.insert(40);
heap.insert(20);
heap.insert(32);
heap.insert(12);
heap.insert(10);
heap.insert(12300);
console.log(heap.heap);
heap.removeMin();
console.log(heap.heap);
heap.removeMin();
console.log(heap.heap);
heap.removeMin();
console.log(heap.heap);
heap.removeMin();
console.log(heap.heap);
heap.removeMin();
console.log(heap.heap);
heap.removeMin();
console.log(heap.heap);
heap.removeMin();
console.log(heap.heap);
heap.removeMin();
console.log(heap.heap);
heap.removeMin();
console.log(heap.heap);