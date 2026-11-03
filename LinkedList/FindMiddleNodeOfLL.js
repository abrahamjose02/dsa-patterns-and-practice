
// Two pointer approach 
// the starting position of fast can determine which middle node slow reaches for an even-length linked list.
// Like if the fast = head.next then we get the slow to be in the first middle node for even length LL
// if the fast = head then we get the slow to be in the second middle node for the even length LL
function FindMiddleNodeOfLL(head){
    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}