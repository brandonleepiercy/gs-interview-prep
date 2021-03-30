# Linked Lists

## Overview
- Linked lists are kind of similar to arrays but instead of being stored in a specific location with a index that you can traverse with, linked lists are lists of objects that contain data and a pointer to the next object. The entry point/first node would be the "Head". The last node in the chain would point to a null reference. If there are no objects in the list, the head would be a null reference.

- ### Advantages of Linked Lists
    - Nodes can easily be added to or removed from a linked list without reorganizing the data structure.

- ### Disadvantages of Linked Lists
    - Uses more memory because of the pointer storage
    - Operations are slow due to the sequential nature

- ## Types of Linked Lists
1. Singly Linked Lists - each node contains only one pointer to the next node
2. Doubly Linked Lists - each node continas two pointers, one to the next node and one to the previous node
3. Circular Linked Lists - a variation where the last node points to the beginning or any node that comes before it to form a loop