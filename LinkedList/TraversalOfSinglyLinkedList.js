
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const head = new Node(10);
const second = new Node(20);
const third = new Node(30);
const fourth = new Node(40);

head.next = second;
second.next = third;
third.next = fourth;

function traverseLinkedList(head) {
    let temp = head
    while(temp !== null){
        console.log(temp.data)
        temp = temp.next
    }
}

traverseLinkedList(head);
