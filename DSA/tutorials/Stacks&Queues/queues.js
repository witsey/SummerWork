// Queues Implementation using Arrays:
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {this.queue.push(data);}
    isEmpty() {return this.queue.length == 0;}

    dequeue() {
          if (this.isEmpty())
            return "Stack is empty."
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty())
            return "Stack is empty."
        return this.queue[0];
    }

    size() {return this.queue.length;}

    print() {console.log(this.queue);}
}