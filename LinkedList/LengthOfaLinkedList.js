
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

function LengthOfaLinkedList(head){
    let temp = head
    let length = 0
    while(temp !== null){
        length++
        temp = temp.next
    }
    return length
}

console.log(LengthOfaLinkedList(head))
console.log(LengthOfaLinkedList(null))
