class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    };

    append(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++
            node = node.next
        }
        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        let lastNode = this.head;
        if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
        return lastNode
    }

    at(index) {
        if (index < 0) return null; // Handle negative index
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode !== null && currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode;
    }

    pop() {

    }

    contains(value) {
        
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
console.log(myList);