
// The below solution has a time complexity of O(nlogn) , which is the desired output , but also has the 
// The space complexity of O(n), which needs to be optimized to O(1)
function SortLinkedList(head){
    let values = []
    let current = head
    while(current !== null){
        values.push(current.val)
        current = current.next
    }
    values.sort((a,b)=>a-b)
    current = head
    for(let i=0;i<values.length;i++){
        current.val = values[i]
        current = current.next
    }
    return head
}

// Optimized Approach is having the LinkedList with space complexity of O(1) and also 
//Middle Node finding and splitting the list into two halves from the middlenode
// Then recursively dividing them by sort list and them merging the sorted lists 

 function middleNode(head){
    let slow = head
    let fast = head.next
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
 }
 function mergeTwoList(list1,list2){
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
    tail.next = pointer1 !== null ? pointer1 : pointer2
    return dummy.next
 }
var sortList = function(head) {
    if(head === null || head.next === null){
        return head
    }
    let middleHead = middleNode(head)
    let left = head
    let right = middleHead.next
    middleHead.next = null
    let sortedLeft = sortList(left)
    let sortedRight = sortList(right)
    return mergeTwoList(sortedLeft,sortedRight)
};