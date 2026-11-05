function removeDuplicatesInDLL(head) {
    let current = head
    while(current !== null && current.next !== null){
        if(current.val === current.next.val){
            let duplicateNode = current.next
            let nextNode = duplicateNode.next

            current.next = nextNode
            if(nextNode !== null){
                nextNode.prev = current
            }
            duplicateNode.next = null
            duplicateNode.prev = null
        }
        else{
            current = current.next
        }
    }
    return head
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    removeDuplicates() {
        let current = this.head
        while(current !== null && current.next !== null){
            if(current.val === current.next.val){
                let duplicateNode = current.next
                let nextNode = current.next.next
                current.next = nextNode
                if(nextNode !== null){
                    nextNode.prev = current
                }
                duplicateNode.prev = null
                duplicateNode.next = null
            }else{
                current = current.next
            }
        }
        return this.head
    }
}