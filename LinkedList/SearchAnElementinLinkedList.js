
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



function searchLinkedList(head, target) {
    let temp = head
    while(temp !== null){
        if(temp.data === target){
            return true
        }
        temp = temp.next
    }
    return false
}

console.log(searchLinkedList(head, 30)); 
console.log(searchLinkedList(head, 50)); 
console.log(searchLinkedList(null, 10)); 

