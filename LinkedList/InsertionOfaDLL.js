class Node{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}

function insertBeforeHeadDLL(head, value) {
    const newNode = new Node(value)
    if(head === null){
        head = newNode
        return head
    }
    newNode.next = head
    head.prev = newNode
    head = newNode
    return head
}

class DLL{
    constructor(){
        this.head = null
        this.tail = null
    }
    insertBeforeHeadDLL(value){
        const newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
            return this.head
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        return this.head
    }
}

//Insert at Tail

function insertAtTail(head,value){
    const newNode = new Node(value)
    if(head === null){
        head = newNode
        return head
    }
    let temp = head
    while(temp.next !== null){
        temp = temp.next
    }
    temp.next = newNode
    newNode.prev = temp
    return head
}

class DLL{
    constructor(){
        this.head = null
        this.tail = null
    }
    insertAtTail(value){
        const newNode = new Node(value)
        if(this.tail === null){
            this.tail = newNode
            this.head = newNode
            return this.head
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        return this.head
    }
}

//Insert Before the Kth Node

function insertBeforeTheKthDLL(head,k,value){
    const newNode = new Node(value)
    if(head === null || k<=0){
        return head
    }
    if(k===1){
        newNode.next = head
        head.prev = newNode
        head = newNode
        return head
    }
    let temp = head
    let count = 1
    while(count < k && temp.next !== null){
        temp = temp.next
        count++
    }
    if(k !== count){
        return head
    }
    temp.prev.next = newNode
    newNode.prev = temp.prev
    newNode.next = temp
    temp.prev = newNode
    return head
}

class DLL{
    constructor(){
        this.head = null
        this.tail = null
    }
    insertBeforeTheKthDLL(k,value){
        const newNode = new Node(value)
        if(this.head === null || k<=0){
            return this.head
        }
        if(k===1){
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
            return this.head
        }
        let temp = this.head
        let count = 1
        while(temp.next !== null && count < k){
            temp = temp.next
            count++
        }
        if(count !== k){
            return this.head
        }
        // here the order of the below matters
        temp.prev.next = newNode
        newNode.prev = temp.prev
        newNode.next = temp
        temp.prev = newNode
        

        return this.head
    }
}

//Insert before a given Node

function insertBeforeGivenNodeDLL(head, node, value) {
    const newNode = new Node(value)
    if(head === null || node === null){
        return head;
    }
    if(node === head){
        newNode.next = head
        head.prev = newNode
        return newNode
    }
    
    const previous = node.prev

    previous.next = newNode
    newNode.prev = previous
    newNode.next = node
    node.prev = newNode

    return head

}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertBeforeGivenNodeDLL(node, value) {
        const newNode = new Node(value)
        if(this.head === null || this.tail === null || node === null){
            return this.head
        }
        if(this.head === node){
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
            return this.head
        }
        
        let previous = node.prev

        previous.next = newNode
        newNode.prev = previous
        newNode.next = node
        node.prev = newNode

        return this.head
    }
}