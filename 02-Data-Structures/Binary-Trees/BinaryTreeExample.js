//Constructor class for a new Node. It contains the data (the integer), and it has pointers for the left and right child.
// For now, they are null.
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
};

//Constructor class for the BST. This contains the methods/properties that make the BST.
class BST {
    //This specific constructor acts as the default case for the BST. With no data, it establishes that there is a root node, and for now it is null.
    constructor() {
        this.root = null;
    }
    add(data) { //This is the add function/method for the BST class, it accepts data as an argument
        const node = this.root; //When the function is called with data, it grabs a reference to the current root
        if (node === null) { //If the root is null, then the data is assigned to the root via the Node constructor
            this.root = new Node(data);
            return;
        } else { //Else OR if the root is NOT null
            const searchTree = (node) => { //then run the searchTree function which accepts a node and analyzes where to go based on the data
                if (data < node.data) { //If the new data is less than the node which was passed in
                    if (node.left === null) { //If node.left of the node being searched is null
                        node.left = new Node(data); //Then establish the new node at node.left
                        return;
                    } else if (node.left !== null) { //If node.left of the node being searched is not null
                        return searchTree(node.left);//Then pass in node.left to the searchTree function and begin again
                    }
                } else if (data > node.data) { //If the data is greater than the value of the data in the node being searched, go right
                    if (node.right === null) { //If node.right of node being searched is null
                        node.right = new Node(data); //Then establish the new node at node.right
                        return;
                    } else if (node.right !== null) { //If node.right of the node being searched is not null
                        return searchTree(node.right); //Then pass in node.right to the searchTree function and begin again
                    }
                } else { //If the data being entered is not greater than or less than the node being analyzed, it is equal
                    return null; //Return null if equal, duplicate data is not entered into a BST
                }
            };
            return searchTree(node); //Calling the function if the program hits the else case defined on line 22
        }
    }
    findMin() { //Function to find the minimum of a BST, which is always going to be the leftmost element
        let current = this.root; //Current starts at root
        while (current.left !== null) { //While the left of the current node is not null
            current = current.left; //Adjust the current node to the left of the current node (recursion)
        }
        return current.data; //If current.left IS null, you are kicked out of the while loop, then return current.data
    };
    findMax() { //Mirror of findMin();
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    };
    find(data) { //Finding a specific node based on matching data
        let current = this.root; //Start at root
        while (current.data !== data) { //While the data of the current node does not equal the data being searched for
            if (data < current.data) { //If the searched value is less than the current value
                current = current.left; //Assign the left of the current value to the new current value
            } else { //If the searched value is greater than the current value
                current = current.right; //Assign the right of the current value to the new current value
            }
            if (current === null) { //If current becomes null, this means either direction has been exhausted without finding the data
                return null; //Then return null
            }
        }
        return current; //If a match is found, you are kicked out of the while loop and the function returns the current node
    }
    isPresent(data) { //If a node is present given a data value
        let current = this.root; //Start at root
        while (current) { //While current is not null
            if (data === current.data) { //If the searched value matches the current node's value
                return true; //Then return true
            }
            if (data < current.data) { //If the searched data is less than the current node's value, 
                current = current.left; //Then move the current node to the left and run it again
            } else { //Else the searched data must be greater than the current node's value
                current = current.right; //Then move the current node to the right and run it again
            }
        }
        return false; //If the search is exhausted, you are kicked out and the program returns false
    }
    remove(data) { //Function to remove any node given a data value
        const removeNode = (node, data) => { //Definition of the function
            if (node == null) { //Initial check to see if the tree is empty, IF it the tree is empty 
                return null; //Then return null
            }
            if (data == node.data) { //If the data you want to delete equals the current node's data (starts as the root when called on line 121);
                //IF node has no children
                if (node.left == null && node.right == null) {
                    return null; //THEN replace the value of the node with null
                }
                //IF node has no left child
                if (node.left == null) {
                    return node.right; //THEN replace the node with the value of it's right child
                }
                //IF node has no right child
                if (node.right == null) {
                    return node.left; //THEN replace the node with the value of it's left child
                }
                //IF node has two children
                var tempNode = node.right; //THEN setup a temp node which captures the node's right child to bubble down
                while (tempNode.left !== null) { //As long as the temp nodes's left child is not null
                    tempNode = tempNode.left; //Assign the temp node as the right child's left child
                }
                node.data = tempNode.data; //The node to be deleted's value gets replaced with the value of the leftmost tempNode
                node.right = removeNode(node.right, tempNode.data); //This sets up the right side of the children of the replaced node
                return node;
            } else if (data < node.data) { //IF the data to be deleted is less than the value of the node being analyzed 
                node.left = removeNode(node.left, data); //THEN set the node to be analyzed to the left by passing it into the equation
                return node;
            } else {
                node.right = removeNode(node.right, data); //IF the data to be deleted is higher... etc
                return node;
            }
        }
        this.root = removeNode(this.root, data); //Calling the function to initialize the recursive loop
    }
};

//TEST CASES TO VERIFY FUNCTIONALITY
bst.add(23);
bst.add(4);
bst.add(99);
bst.add(12);
bst.add(3);
bst.add(42);
bst.add(33);
bst.add(81);
bst.add(24);
console.log(bst.findMax());
console.log(bst.findMin());
console.log(bst.isPresent(24));
bst.remove(24);
console.log(bst.isPresent(24));
bst.add(1234);
console.log(bst.findMax());