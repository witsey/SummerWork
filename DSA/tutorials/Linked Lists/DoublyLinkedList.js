class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // the first node will be added
        this.size = 0; // keep track of the number of nodes
    }

    // Method to create a new node with specific data and link it to the last node in the list
    append(data) {
        const newNode = new Node(data);
        if (this.head === null)
            this.head = newNode; // if the current list is empty, set the head to be newNode
        
        else {
            let current = this.head; // a Variable that will be used to traverse through the list (we start from the head)
            while(current.next) { // checks if there is a next node 
                current = current.next; // if yes, move to the next node
            }
            current.next = newNode; // once we are in the end of the list, link the new node to last node of the list
            newNode.prev = current;
        }
        this.size++;
    }
    
    // Method to remove the first occurrence of a node with the specified data
    remove(data) {
        if(this.head === null) return; // if the list is empty, exit the removing operation

        if(this.head.data === data) {  // if the head is the node we are looking for
            this.head = this.head.next; // remove the head node
            if(this.head !== null) { // If there's a new head
                this.head.prev = null; //  set its previous pointer to null
            }
            this.size--;
            return;
        }

        let current = this.head; // we start traversing from the head
        while(current.next && current.next.data !== data) { // as long as there's a next node and that node's data isn't 
            current = current.next; // traverse to the next node
        }
        // at this point either the current reached the targeted node or it reached the end of the list

        if(current.next) { // if we it didn't reach the end of the list (there's a node with data we want to remove)
            current.next = current.next.next; // Bypass the node to be removed
            if(current.next) {
                current.next.prev = current;
            }
            this.size--; // Decrement size of the list
        }

        this.size--;
    }

    // Method to print the list
    printList() {
        let current = this.head; // start from the first node
        let list = '';
        while(current) { // as long as current is not empty (the scope of the list)
            list += '[' + current.data + ']' + '->';
            current = current.next; // move to the next node;
        }

        list += '[null]' // add 'null' to the end of the list
        console.log(list);
    }

    sort() {
        let current1 = this.head;
        while(current1.next !== null)
            current1 = current1.next;

        let current2 = this.head;
        
        while(current1 !== this.head) {
            while(current2 !== current1) {
                if(current2.data > current2.next.data)
                    [current2.data, current2.next.data] = [current2.next.data, current2.data];
            }
        }
    }
}