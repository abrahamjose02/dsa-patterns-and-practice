function DeleteAllOccurrenceOfaKeyInDLL(head,key){
    let current = head
    while(current !== null){
        let nextNode = current.next
        if(current.val === key){
            let prevNode = current.prev
            if(prevNode === null){
                head = nextNode
            }else{
                prevNode.next = nextNode
            }
            if(nextNode !== null){
                nextNode.prev = prevNode
            }
            current.next = null
            current.prev = null
        }
        current = nextNode
    }
    return head
}