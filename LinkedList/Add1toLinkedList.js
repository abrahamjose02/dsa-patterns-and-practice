function reverseLinkedList(head){
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
function addOneToLinkedList(head){
    let reversedListHead = reverseLinkedList(head)
    let current = reversedListHead
    let carry  = 1
    let last = null
    while(current !== null && carry !== 0){
        let sum = current.val + carry

        current.val = sum % 10

        carry = Math.floor(sum/10)

        last = current

        current = current.next
    }
    if(carry !== 0){
        let newNode = new Node(1)
        last.next = newNode
    }
   return reverseLinkedList(reversedListHead)
}