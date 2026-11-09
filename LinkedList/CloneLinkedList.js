//it tests your understanding of object references, 
//shallow versus deep copying, and pointer manipulation in JavaScript.

class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

var copyRandomList = function(head) {
    if(head === null){
        return null
    }
    let map = new Map()
    let current = head
    while(current !== null){
        let clonedNode = new Node(current.val)
        map.set(current,clonedNode)
        current = current.next
    }
    current = head
    while(current !== null){
        let clonedCurrent = map.get(current)
        let clonedNext = map.get(current.next)

        clonedCurrent.next = current.next !== null ? clonedNext : null // Equvalent to : map.get(current).next = map.get(current.next)

        let clonedRandom = map.get(current.random)

        clonedCurrent.random = current.random !== null ? clonedRandom : null

        current = current.next
    }
    return map.get(head)
};

// The above solution has a Time and Space complexity of O(n) And need to optimize the space complexity to 
// O(1) instead of O(n)

// The new method involves three stages : 

// Insert cloned nodes between original nodes. First we have to connect the clonedNode with the right element and then
// with the current.next = clonedNode
// Connect the cloned random pointers.
// Separate the cloned list and restore the original list.

var CopyRandomList = function(head){
    if(head === null){
        return head
    }
    let current = head
    //insertion loop
    while(current !== null){
        let clonedNode = new Node(current.val)

        clonedNode.next = current.next
        current.next = clonedNode

        current = current.next.next
    }
    current = head

    // connecting the random pointer
    while( current !== null){
        current.next.random = current.random !== null ? current.random.next : null
        current = current.next.next
    }

    current = head // original Node
    let clonedNode = current.next // clonedNode
    let clonedHead = head.next
    while(current !== null && current.next !== null){
        current.next = current.next.next
        clonedNode.next = current.next !== null ? clonedNode.next.next : null

        current = current.next
        clonedNode = clonedNode.next
    }
   
    return clonedHead
}