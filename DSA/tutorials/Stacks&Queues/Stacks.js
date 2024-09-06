// Stack Implementation using Arrays:
class Stack {
    #stack;
    constructor() {
        this.#stack = [];
    }

    push(data) {this.stack.push(data);}
    isEmpty() {return this.stack.length == 0;}

    pop() {
          if (this.isEmpty())
            return "Stack is empty."
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty())
            return "Stack is empty."
        return this.stack[this.stack.length - 1];
    }

    size() {return this.stack.length;}

    print() {console.log(this.stack);}
}


const myStack = new Stack();
myStack.push(10);
myStack.push(20);
