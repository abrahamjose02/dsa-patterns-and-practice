class Node{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}

// Delete the Head from the Double LinkedList

function deleteHeadDLL(head){
    if(head === null){
        return null
    }
    if(head.next === null){
        return null
    }
    const oldHead = head
    head = head.next
    head.prev = null
    
    oldHead.next = null; // This ensures that removed node no longer references the remaining list ,, even if some other 
    // variable still holds a reference to it.

    return head
}


class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    deleteHeadDLL(){
        if(this.head === null){
            return null
        }
        if(this.head === this.tail){
            this.head = null
            this.tail = null
            return null;
        }
        const oldHead = this.head
        this.head = this.head.next
        this.head.prev = null

        oldHead.next = null

        return this.head
    }
}

// Delete the Tail of the DLL

function DeleteTailDLL(head){
    if(head === null){
        return null;
    }
    if(head.next === null){
        return null;
    }
    let temp = head
    while(temp.next !== null){
        temp = temp.next
    }
    const oldTail = temp
    temp.prev.next = null
    oldTail.prev = null
    return head
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    deleteTailDLL(){
        if(this.tail === null){
            return null
        }
        if(this.head === this.tail){
            this.head = null
            this.tail = null
            return null
        }
        const oldTail = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        oldTail.prev = null
        return this.head
    }
}

// Delete the Kth Node

function DeleteKthDLL(head,k){
    if(head === null){
        return null;
    }
    if(k<=0){
        return head
    }
    if(k===1){
        const oldHead = head
        head = head.next
        if(head !== null){
            head.prev = null
        }
        oldHead.next = null
        return head
    }
    let temp = head
    let count = 1;
    while(temp.next !== null && count < k){
        temp = temp.next
        count++
    }
    // Case 3: K is greater than the length
    if(count !== k){
        return head
    }
    temp.prev.next = temp.next
    if(temp.next !== null){
        temp.next.prev = temp.prev
    }
    //Detaching the deleted NOde
    temp.prev = null
    temp.next = null
    return head
}


class DLL{
    constructor(){
        this.head = null
        this.tail = null
    }

    deleteKthDLL(k){
        if(this.head === null || k<=0){
            return this.head
        }
        if(k===1){
            const oldHead = this.head
            if(this.head === this.tail){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
            oldHead.next = null
            return this.head
        }
        let temp = this.head
        let count = 1
        while(temp.next !== null && count < k){
            temp = temp.next
            count++
        }
        if (count !== k) {
           return this.head;
        }

        // updating tail if deleting last node
        if(temp === this.tail){
            this.tail = this.tail.prev
        }
        temp.prev.next = temp.next
        if(temp.next !== null){
            temp.next.prev = temp.prev
        }
        temp.prev = null
        temp.next = null

        return this.head
    }
}

// Delete the given Node by reference or value

function deleteNodeDLL(node){
    node.prev.next = node.next
    if(node.next !== null){
        node.next.prev = node.prev
    }
    node.prev= null
    node.next = null
}


function deleteNodeDLLstand(head,node){
    if(head === null || node === null){
        return head
    }
    
    if(node === head){
        const oldHead = head
        head = head.next
        if(head !== null){
            head.prev = null
        }
        oldHead.next = null
        return head 
    }
    node.prev.next = node.next
    if(node.next !== null){
        node.next.prev = node.prev
    }

    node.prev = null
    node.next = null
    return head
}

class DLL{
    constructor(){
        this.head = null
        this.tail = null
    }
    deleteNodeDLL(node){
        if(this.head === null || this.tail === null || node === null){
            return this.head
        }
        if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        return null;
        }
        if(node === this.head){
            const oldHead = this.head
            this.head = this.head.next
            if(this.head !== null){
                this.head.prev = null
            }
            oldHead.next = null
            return this.head
        }
        if(node === this.tail){
            const oldTail = this.tail
            this.tail = this.tail.prev
            if(this.tail !== null){
                this.tail.next = null
            }
            oldTail.prev = null
            return this.head
        }
        node.prev.next = node.next
        if(node.next !== null){
            node.next.prev = node.prev
        }
        node.next = null
        node.prev = null

        return this.head
    }
}