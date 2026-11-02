function ReverseALinkedList(head){
    if(head === null){
        return null
    }
    let prev = null
    let current = head
    while(current !== null){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}


// Recursive form of implementing the value

function recrusiveReverseALL(head){
    if(head === null || head.next === null){
        return head
    }

    let newHead = recrusiveReverseALL(head.next)

    head.next.next = head
    head.next = null

    return newHead
}