class Stack {
    constructor() {
        this.stack = [];
    };
    insert(data) {
        this.stack.push(data);
    };
    delete() {
        return(this.stack.pop());
    };
    peek(index) {
        return(this.stack[index]);
    };
};

const stack = new Stack();
stack.insert("plate 1");
stack.insert("plate 2");
stack.insert("plate 3");
stack.insert("plate 4");
stack.insert("plate 5");
stack.insert("plate 6");
stack.insert("plate 7");
stack.insert("plate 8");
console.log(stack);
stack.delete();
console.log(stack);
stack.delete();
stack.delete();
stack.delete();
console.log(stack);
console.log(stack.peek(3));