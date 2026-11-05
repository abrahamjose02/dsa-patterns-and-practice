function reverse(left,right,arr){
    while(left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
    return arr
 }
var rotateRight = function(head, k) {
    if(head === null || head.next === null){
        return head
    }
    let current = head
    let values = []
    while(current !== null){
        values.push(current.val)
        current = current.next
    }
    let n = values.length
    k = k % n
    reverse(0,n-1,values)
    reverse(k,n-1,values)
    reverse(0,k-1,values)

    let temp = head
    for(let i=0;i<values.length;i++){
        temp.val = values[i]
        temp = temp.next
    }
    return head
};

// The above solution is in O(n) space complexity
// Need to make the solution in O(1) space complexity

function rotateRightLinkedList(head,k){
    if(head === null){
        return head;
    }
    let originalHead = head
    let current = head
    let n = 0
    let originalTail = null
    while(current !== null){
        n++
        originalTail = current
        current = current.next
    }
    k = k % n
    if(k === 0){
        return head
    }
    let newTail = null
    let newHead = null
    let count = 0
    current = head
    while(count < n-k-1){
        count++
        current = current.next
    }
    newTail = current
    newHead = current.next

    originalTail.next = originalHead
    newTail.next = null

    return newHead
}