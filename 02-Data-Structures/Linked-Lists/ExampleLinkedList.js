//Class for the individual nodes of data within a linked list
class Node {
    //Nodes only contain data and their pointers
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Class for a linked list
class LinkedList {
    //Construct the head which by default points to null
    //Size counter optional but nice
    constructor() {
        this.head = null;
        this.size = 0;
    };

    //Basic add function to append data to the end of the link chain
    add(data) {
        //Create the new node variable
        let node = new Node(data);
        //Create a pointer
        let current;
        //If there are no nodes in the list
        if (this.head == null) {
            //Then establish this node as the head
            this.head = node;
        //Else there are nodes in the list
        } else {
            //Set the current pointer to the head/entry point
            current = this.head;
            //While the pointer still has somewhere to go next
            while (current.next) {
                //Push the pointer to the next
                current = current.next;
            }
            //Once there is no more next you are kicked out of the loop and you establish the .next on the current as the new node you want at the end of the chain.
            current.next = node;
        };
        //Increment the size as there's a new node.
        this.size++;
    };

    //How to insert at a particular 'index' or level, obviously accepts both the data and index as arguments
    insertAt(data, index) {
        //If the index is greater than zero and the index is greater than the size of the list
        if (index > 0 && index > this.size) {
            //Then there is an error
            console.log("error: tried inserting past bounds of list");
        //Else everything is fine and we must analyze
        } else {
            //Establish a variable for the new node
            let node = new Node(data);
            //Establish two pointers, one for the current node and one for the previous node
            let curr, prev;
            //Set the current pointer to the head
            curr = this.head;
            //If you're trying to insert at the head
            if (index == 0) {
                //Set the .next property node for the node you want to insert as the head that you want to overwrite.
                node.next = this.head;
                //Overwrite the head with the new node.
                this.head = node;
            //Else, you're trying to insert the node NOT at the head
            } else {
                //Set the current pointer to the head and initialize the iteration index tracker.
                curr = this.head;
                var it = 0;
                //While the iteration index is lower than the index input by the user
                while (it < index) {
                    //Increase the iteration count because we're continuing on
                    it++;
                    //Set the previous pointer to the current pointer, and set the current pointer to the current node's next
                    prev = curr;
                    curr = curr.next;
                }
                //Eventually the iteration index tracker will equal the index.
                //So set the iteration index, next to the node right now, this shifts the node to the right and makes space
                //Set prev.next to node, which sets this node to the node you want to enter
                node.next = curr;
                prev.next = node;
            }
            //Increase the size as something was inserted
            this.size++;
        }
    };

    //Remove an element from a specific index
    removeFrom(index) {
        //If the index is greater than zero and greater than the size of the list
        if (index > 0 && index > this.size) {
            //Then there is an error
            console.log("error: tryna remove an element that isn't there boss");
        //Else there is not an error
        } else {
            //Initialize pointers for the current, previous positions and an interation counter
            let curr, prev, it = 0;
            //Point the current to the head
            curr = this.head;
            prev = curr;
            //If you're trying to delete the head
            if (index == 0) {
                //Then set the head as the next node
                this.head = curr.next;
            //If you're not trying to delete the head
            } else {
                //While the iteration counter is lower than the index desired
                while (it < index) {
                    //Increase the iteration count
                    it++;
                    //Traverse to the next element.
                    prev = curr;
                    curr = curr.next;
                };
                //Once the iteration counter meets the index to be deleted
                //Set the previous next to the current next. Drops the element and draws the surrounding nodes in to cover the gap.
                prev.next = curr.next;
            };
            //Decrement size.
            this.size --;
            //Return the node deleted for debugging purposes.
            return curr.data;
        };
    };

    //Remove the first element that matches given data
    removeElement(data) {
        //Initialize the pointers and set curr to the head
        let current = this.head;
        let prev = null;
        //While the current pointer is pointing at an element that exists
        while (current != null) {
            //If the current node's data matches the data to be removed
            if (current.data === data) {
                //If the previous node is null (then you are at the head)
                if (prev == null) {
                    //Then set the next node as the head
                    this.head = current.next;
                //If you are not at the head
                } else {
                    //Then drop the node and close the gap
                    prev.next = current.next;
                }
                //Decrement size
                this.size--;
                //Debugging
                return current.data;
            }
            //If the current node's data does NOT match the data to be deleted
            //Then move the previous pointer to the current node and the current pointer to the next node.
            prev = current;
            current = current.next;
        }
        //If the loop finishes and the data is not found
        return "error: the element ain't here mate!";
    };

    isEmpty() {
        return this.size == 0;
    };

    sizeOfList() {
        return this.size;
    };

    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.data + " ";
            curr = curr.next;
        }
        return str;
    };
};


//Test Cases
const list = new LinkedList();
list.add(15);
list.add(23);
list.add(14);
list.insertAt(13, 2);
console.log(list.removeFrom(2));
list.add(40);
list.add(34);
console.log(list.printList());
console.log(list.removeFrom(4));
console.log(list.printList());
list.insertAt(999, 0);
console.log(list.printList());