# Stacks

## Overview
- Stacks are basically the same thing as Queues. The only thing that is different is that instead of FIFO, it follows Last In First Out (LIFO), simulating a real world stack of objects. Lay things down and the thing that gets put down first remains on the bottom till the rest are removed.

## Operations
- Push
- Pop
- Peek

## Big O
- All the operations are O(1), constant.
You either remove from the front or back, nothing is really computed you dont have to traverse to remove from the end. Peek could be O(n) worst case scenario.