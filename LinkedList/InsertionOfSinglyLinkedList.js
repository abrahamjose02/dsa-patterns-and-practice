//Insertion of the value at the head

class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}

const newNode = new Node(5)

newNode.next = head

head = newNode

//Step 1 — Connect the new node to the existing list.
//Step 2 — Update the head reference.

function insertAtHead(head,value){
    const newNode = new Node(value)
    newNode.next = head
    return newNode
}

class LinkedList{
    constructor(){
        this.head = null
    }
    insertAtHead(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }
}

//Insert at tail

function insertAtTail(head,value){
    const newNode = new Node(value)
    if(head === null){
        head = newNode
        return head;
    }
    let temp = head
    while(temp.next !== null){
        temp = temp.next
    }
    temp.next = newNode

    return head
}

class LinkedList{
    constructor(){
        this.head = null
    }
    insertAtTail(value){
        const newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
        }
        else{
            let temp = this.head
            while(temp.next !== null){
                temp = temp.next
            }
            temp.next = newNode
        }
        return newNode
    }
}

//Insert at the Kth position

function InsertAtKth(head,value,k){
    const newNode = new Node(value)
    if(head === null){
        return head;
    }
    if(k<=0){
        return head;
    }
    if(k===1){
        newNode.next = head
        head = newNode
        return head
    }
    let temp = head
    let i = 1;
    for(;i<k-1 && temp.next !== null ;i+1){
        temp = temp.next
    }
    if(i !== k-1){
        return head
    }
    newNode.next = temp.next
    temp.next = newNode
    return head
}

class LinkedList{
    constructor(){
        this.head = null
    }
    InsertAtKth(value,k){
        const newNode = new Node(value)
        if(k<=0){
            return this.head
        }
        if(k===1){
            newNode.next = this.head
            this.head = newNode
            return this.head
        }
        // if we put this below condition above the k===1 then the function doesn't go below to the k==1 case . 
        // So we have to place the null checking part for the head below the k===1 part
        if(this.head === null){
            return this.head
        }
        let temp = this.head
        let i=1
        for(;i<k-1&&temp.next !== null ; i++){
            temp = temp.next
        }
        if(i !== k-1){
            return this.head
        }
        newNode.next = temp.next
        temp.next = newNode
        return this.head
    }
}

// Insert before a given value.

function insertBeforeTheValue(head,value,target){
    const newNode = new Node(value)
    if(head === null){
        return head
    }
    if(head.data === target){
        newNode.next = head
        head = newNode
        return newNode
    }
    let temp = head
    while(temp.next !== null){
        if(temp.next.data === target){
            newNode.next = temp.next
            temp.next = newNode
            return head;
        }
        temp = temp.next
    }
    return head
}

class LinkedList{
    constructor(){
        this.head = null
    }
    insertBeforeTheValue(value,target){
        const newNode = new Node(value)
        if(this.head === null){
            return this.head
        }
        if(this.head.data === target){
            newNode.next = this.head
            this.head = newNode
            return this.head
        }
        let temp = this.head
        while(temp.next !== null){
            if(temp.next.data === target){
                newNode.next = temp.next
                temp.next = newNode
                return this.head
            }
            temp = temp.next
        }
        return this.head
    }
}