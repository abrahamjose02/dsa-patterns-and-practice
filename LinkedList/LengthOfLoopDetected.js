function currentLoopLength(meetingNode){
    let current = meetingNode.next
    let length = 1
    while(current !== meetingNode){
        length++
        current = current.next
    }
    return length
}

function LengthOfLoopDetected(head){
    let slow = head
    let fast = head
    let length = 0
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
           return length = currentLoopLength(slow)
            
        }
    }
    return 0
}

