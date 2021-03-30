class Q {
    //Initialize a q with an empty array
    constructor() {
        this.q = [];
    }
    //Enqueue is just pushing
    enq(data) {
        this.q.push(data);
    }
    //Dequeuing is just shifting
    dq() {
        return(this.q.shift());
    }
    //Peeking is looking at a specific index without manipulating
    peek(index) {
        return(this.q[index]);
    }
    //Is it empty or not
    isEmpty() {
        return this.q.length === 0;
    }
};

const q = new Q;

q.enq("Chad");
q.enq("Tori");
q.enq("Bella");
q.enq("Troy");
q.enq("Brandon");
q.enq("Tasi");
console.log(q.dq());
console.log(q.dq());
console.log(q.dq());
console.log(q.dq());
q.enq("Zoe");
q.enq("Derrick");
console.log(q.peek(3));