# Queues

## Overview
- Queues and stacks are both very similar and simple data structures. A queue is an ordered list of elements where an element is inserted at the end of a queue and removed from the front of a queue. It models the First In First Out (FIFO) inventory principle. In javascript they are typically implemented with an array, shift() and push() methods.

## Operations
- Enqueue 
- Dequeue
- Peek

## Big O
- All the operations are O(1), constant.
You either remove from the front or back, nothing is really computed you dont have to traverse to remove from the end. Peek could be O(n) worst case scenario.