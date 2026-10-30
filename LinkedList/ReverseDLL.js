function reverseDLL(head) {
    if(head === null){
        return head;
    }
    let newHead = null
    let temp = head
    while(temp !== null){
        const saved = temp.prev
        temp.prev = temp.next
        temp.next = saved

        newHead = temp

        temp = temp.prev
    }
    return newHead
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    reverseDLL() {
       if(this.head === null || this.tail === null){
        return null
       }
       if(this.head === this.tail){
        return this.head
       }
       let newHead = null
       let temp = this.head
       while(temp !== null){
        const saved = temp.prev
        temp.prev = temp.next
        temp.next = saved

        newHead = temp

        temp = temp.prev
       }
       this.tail = this.head
       this.head = newHead
       return this.head
    }
}