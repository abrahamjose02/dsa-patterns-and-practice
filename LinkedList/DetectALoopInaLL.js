function DetectALoopInACycle(head){
    let slow = head
    let fast = head
    while(fast !== null & fast.next !== null){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
}

// Time complexity is : O(n)
// Space compleixty is : O(1)