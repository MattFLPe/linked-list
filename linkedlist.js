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