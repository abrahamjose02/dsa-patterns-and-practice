function RemoveNthNode(head,n){
    if(head === null || n<=0){
        return head
    }
    let temp = head
    let length = 0
    while(temp!==null){
        temp = temp.next
        length++
    }
    if(n>length){
        return head
    }
    let k = length - n + 1
    if(k===1){
        head = head.next
        return head
    }
    temp = head
    for(let i = 1;i<k-1;i++){
        temp = temp.next
    }
    temp.next = temp.next.next
    return head
}