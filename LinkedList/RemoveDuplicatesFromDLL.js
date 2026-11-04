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