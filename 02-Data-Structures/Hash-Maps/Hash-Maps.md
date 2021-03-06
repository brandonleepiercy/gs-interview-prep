# Hash Maps

## Overview
    Hash tables/maps are used to implement associative arrays/ mappings of key value pairs. They're used a lot because of how efficient they are. All functions in a hash table are at worst O(n) space and complexity. Hash tables work by taking a key input and running it through a hash function. The hash function just associates a string, usually, with a number (array index). Hash function must be consistent so that when a key is run through the function it always gets the same number. Different words must also always be hashed to different numbers. Two words getting hashed together is called a "collision".

## Big O Complexity of Hash Map Operations
- Average case: O(1) - constant
- Worst case: O(n), linear