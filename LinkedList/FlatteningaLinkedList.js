//Our goal is to flatten all nodes into one sorted list using bottom pointers.

class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.bottom = null
    }
}
function mergeBottomLists(list1, list2) {
    let dummy = new Node(-1)
    let tail = dummy
    let pointer1 = list1
    let pointer2 = list2
    while(pointer1 !== null && pointer2 !== null){
        if(pointer1.data <= pointer2.data){
            tail.bottom = pointer1
            pointer1 = pointer1.bottom
        }
        else{
            tail.bottom = pointer2
            pointer2 = pointer2.bottom
        }
        tail = tail.bottom
        tail.next = null
    }
    if(pointer1 !== null){
        tail.bottom = pointer1
    }
    else{
        tail.bottom = pointer2
    }
    return dummy.bottom
}

function flatten(head){
    if(head === null || head.next === null){
        return head
    }
    let flattenedRight = flatten(head.next)

    //Remove the original horizontal connection.
    head.next = null

    let mergeHead = mergeBottomLists(head,flattenedRight)

    return mergeHead
}