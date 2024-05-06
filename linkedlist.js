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
        if (!this.head) return null; // Empty list
        
        let currentNode = this.head;
        let prevNode = null;

        while (currentNode.next !== null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        // currentNode now points to the last node
        if (prevNode) {
            prevNode.next = null; // Update the second-to-last node's next pointer
            this.tail = prevNode; // Update the tail pointer
        } else {
            // If there was only one node in the list
            this.head = null;
            this.tail = null;
        }

        return currentNode.value;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        // Traverse through the linked list until the element is found
        while (current !== null) {
            if (current.value === value) {
                return `Value found at index ${index}`;
            }
            current = current.next;
            index++;
        }
        return "Value not found";
    }


toString() {
    let result = '';
    let current = this.head;
    while (current) {
        result += `(${current.value}) -> `;
        current = current.next;
    }
    result += 'null';
    return result;
    }   
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.next = nextNode;
    }
}

/*
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
console.log(myList);
*/

let myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
console.log(myList.toString());  // Output: (1) -> (2) -> (3) -> null
