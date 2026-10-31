//Counting pointer approach with O(n) - Time Complexity and O(1) - space complexity

function sortList012(head){
    let count0 = 0
    let count1 = 0
    let count2 = 0

    let temp = head

    while(temp !== null){
        if(temp.data === 0){
            count0++
        }else if(temp.data === 1){
            count1++
        }
        else{
            count2++
        }
        temp = temp.next
    }
    temp = head
    while(temp !== null){
        if(count0 !== 0){
            temp.data = 0
            count0--
        }else if(count1 !== 0){
            temp.data = 1
            count1--
        }
        else{
            temp.data = 2
            count2--
        }
        temp = temp.next
    }
    return head
}


// Pointer Rearrangement Approach 

function sortList012I(head){
    let zeroDummy = new Node(-1)
    let oneDummy = new Node(-1)
    let twoDummy = new Node(-1)

    let zeroTail = zeroDummy
    let oneTail = oneDummy
    let twoTail = twoDummy

    let current = head
    while(current !== null){
        let nextNode = current.next
        if(current.data === 0){
        zeroTail.next = current
        zeroTail = current
    }
    if(current.data === 1){
        oneTail.next = current
        oneTail = current
    }
    if(current.data === 2){
        twoTail.next = current
        twoTail = current
    }
    current.next = null
    current = nextNode
    }
    zeroTail.next = oneDummy.next !== null ? oneDummy.next : twoDummy.next;
    oneTail.next = twoDummy.next;

    return zeroDummy.next
}