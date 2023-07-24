class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node  =  new Node(element);
        let current;

        if(this.head == null) {
            this.head =  node;
        }
        else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAt(element, index) {
        if(index < 0 || index > this.size) {
            return console.log('insert valid index');
        }
        else {
            let node = new Node(element);
            let curr, prev;

            curr = this.head;
            if(index == 0) {
                node.next = this.head;
                this.head =  node;
            }
            else {
                for(let i = 0; i< index; i++) {
                    prev =  curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
        }
        this.size++;
    }
    removeFrom(index) {
        if(index < 0 || index > this.size) {
            return console.log('insert valid index');
        }
        else {
            let curr =  this.head;
            let prev;
            if(index == 0) {
                this.head =  curr.next;
            }
            else {
                for(let i = 0; i < index; i++) {
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.element;
        }
    }
    removeElement(element) {
        let curr =  this.head;
        let prev =   null;
        while(curr != null) {
            if(curr.element == element) {
                if(prev == null) {
                    this.head =  curr.next;
                }
                else {
                    prev.next =  curr.next;
                }
                this.size--;
                return curr.element;
            }
            prev = curr;
            curr = curr.next;
        }
        return -1;
    }
    indexOf(element) {
        let count = 0;
        let curr =  this.head;
        while(curr != null) {
            if(curr.element == element) {
                return count;
            }
            count++;
            curr = curr.next;
        }
        return -1;
    }
    isEmpty() {
        return this.size == 0;
    }
    size_of_list() {
        return this.size;
    }
    printList() {
        let curr =  this.head;
        let str = '';
        while(curr != null) {
            str+= curr.element+ ' ';
            curr = curr.next;
        }
        console.log(str);
    }
}

let ll =  new LinkedList();

console.log(ll.isEmpty());
ll.add(10);
ll.printList();
console.log(ll.size_of_list());
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.printList();
console.log("is element removed ?" + ll.removeElement(50));
ll.printList();
console.log("Index of 40 " + ll.indexOf(40));
ll.insertAt(60, 2);
ll.printList();
console.log("is List Empty ? " + ll.isEmpty());
console.log(ll.removeFrom(3));
ll.printList();

