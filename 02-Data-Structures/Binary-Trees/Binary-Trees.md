# Overview
Trees are a hierarchical (non-linear) data structure that start with a root node. The root node then spawns children and the tree extends downwards. Each node contains two pieces of information, the data and the pointer that references other nodes. The node above a given node in a chain is the parent node. Two nodes next to each other are siblings and any node without a child is a leaf node.

## Binary Trees
A binary tree is a tree in which any node can only have at most, two children. A node can have one or no children, but it cannot exceed two child nodes. This allows child nodes to be referred to as either (left child or right child).

## Binary Search Tree (Money Maker)
A binary search tree is a specific type of tree that always stays sorted because of how the construction constraints. In a binary search tree, every left child must be less than it's parent and every right child must be greater than it's parent. A balanced BST a BST which has roughly the same number of nodes on the left and right side. A perfect tree would be a tree that has the exact same number of nodes on both sides (rare). Worst case scenario, a BST can be so unbalanced it becomes a degenerate tree (a tree that is just a linked list).

- ### Benefits of BSTs
    Everytime you traverse down a node, you discard half of the remaining tree, which allows programmers to access numbers very quickly. Compare with the next node, it's either higher, lower or the same. Due to the nature of a BST and the way it is organized the rules allow the traverser to assume and skip over a ton of data.

- ### BST Implementation
    BSTs are not a native function of Javascript, this means the programmer has to program every facet of a BST using Javascript classes. To begin building a BST, break down the parts that comprise a BST mentally. There are really only two parts to the BST, the Node class (contains the data and the pointers) and the BST class (contains the methods/properties that an application would use to call data, like finding the max etc).