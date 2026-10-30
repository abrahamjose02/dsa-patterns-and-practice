function OddEvenLinkedList(head){
    if(head === null || head.next === null){
        return head
    }
    let odd = head
    let even = head.next
    let evenHead = head.next
    while(even !== null && even.next !== null){
        odd.next = even.next
        odd = odd.next

        even.next = odd.next
        even = even.next
    }
    odd.next = evenHead
    return head
}