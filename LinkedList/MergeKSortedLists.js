// The below has a time complexity of O(NK) 

function mergeTwoLists(list1,list2){
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
function MergeKSortedLists(lists){
    let n = lists.length

    if(n===0){
        return null
    }

    let result = lists[0]

    for(let i=1;i<n;i++){
        result = mergeTwoLists(result,lists[i])
    }
    return result
}

// Time complexity of O(N log K) - more optimize solution with : 
// First round:
// L1 + L2          → 6 nodes
// L3 + L4          → 6 nodes

// Second round:
// Result1 + Result2 → 12 nodes

 function mergeTwoLists(list1,list2){
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
var mergeKLists = function(lists) {
    let n = lists.length
    if(n === 0){
        return null
    }
    let interval = 1
    while(interval < n){
        for(let i=0;i+interval < n; i += 2 * interval){
            lists[i] = mergeTwoLists(lists[i],lists[i+interval])
        }
        interval *= 2
    }
    return lists[0]
};