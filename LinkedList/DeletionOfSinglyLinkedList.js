//Deletion of the Singly LinkedList from head

class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}
// function method is preferred in ths DSA interviews
function deleteFromHead(head){
    if(head === null){
        return null
    }
    return head.next // returns new reference
}

let head = new Node(10)
head.next = new Node(20)
head.next.next = new Node(30)
head.next.next.next = new Node(40)

head = deleteFromHead(head)

console.log(head.data)



// Class implemenation 

class LinkedList{
    constructor(){
        this.head = null
    }
    deleteFromHead(){
        if(this.head === null){
            return;
        }
        this.head = this.head.next
    }
}


const list = new LinkedList()

list.head = new Node(10)
list.head.next = new Node(20)
list.head.next.next = new Node(30)


list.deleteFromHead()

console.log(list.head.data)



//Delete Tail From the Linked List

function deleteTail(head){
   if(head === null || head.next === null){
    return null
   }
    let temp = head
    while(temp.next.next !== null){
        temp = temp.next
    }
    temp.next = null
    
    return head
}

class LinkedList{
    constructor(){
        this.head = null
    }
    deleteTail(){
        if(this.head === null){
            return;
        }
        if(this.head.next === null){
            this.head = null
            return;
        }
        let temp = this.head
        while(temp.next.next !== null){
            temp = temp.next
        }
        temp.next = null
    }
}

//Delete the Kth node

function deleteKthNode(head,k){
   if(head === null || k<=0){
    return head;
   }
    let temp = head
   if(k===1){
    head = head.next
    return head
   }
   for(let i=1;i<k-1 && temp.next !== null;i++){
        temp = temp.next
   }
   if(temp.next !== null){
       temp.next = temp.next.next
   }

   return head
}

//Time: O(N) worst case, because you may traverse the Linked List to find the node before position k.


class LinkedList{
    constructor(){
        this.head = null
    }
    deleteKthNode(k){
        if(this.head === null || k<=0){
            return this.head
        }
        let temp = this.head
        if(k===1){
            this.head = this.head.next
            return this.head
        }
        for(let i=1;i<k-1 && temp.next !== null; i++){
            temp = temp.next
        }
        if(temp.next !== null){
            temp.next = temp.next.next
        }
        return this.head
    }
}

//Delete a Node by its value

function DeleteNodeByValue(head,value){
    if(head === null){
        return head;
    }
    if(head.data === value){
        head = head.next
        return head
    }
    let temp = head
    while(temp.next !== null){
        if(temp.next.data === value){
            temp.next = temp.next.next
            break;
        }
        temp = temp.next
    }
    return head;
}


class LinkedList{
    constructor(){
        this.head = null
    }

    deleteByValue(value){
        if(this.head === null){
            return this.head
        }
        if(this.head.data === value){
            this.head = this.head.next
            return this.head
        }
        let temp = this.head
        while(temp.next !== null){
            if(temp.next.data === value){
                temp.next = temp.next.next
                break;
            }
            temp = temp.next
        }
        return this.head
    }
}