function MergeTwoSortedList(list1,list2){
    let dummy = new ListNode(-1)
    let tail = dummy
    let pointer1 = list1
    let pointer2 = list2
    while(pointer1 !== null && pointer2 !== null){
        if(pointer1.val <= pointer2.val){
            tail.next = pointer1
            pointer1 = pointer1.next
        }else{
            tail.next = pointer2
            pointer2 = pointer2.next
        }
        tail = tail.next
    }
    if(pointer1 !== null){
        tail.next = pointer1
    }else{
        tail.next = pointer2
    }
    return dummy.next
}