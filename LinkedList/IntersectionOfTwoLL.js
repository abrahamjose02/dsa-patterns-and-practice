function getLength(head){
    let length = 0
    let current = head
    while(current !== null){
        length++
        current = current.next
    }
    return length
}
function intersectionOfTwoLL(headA,headB){
    let lengthA = getLength(headA)
    let lengthB = getLength(headB)

    let pointerA = headA
    let pointerB = headB

    if(lengthA > lengthB){
        const difference = lengthA - lengthB
        for(let i=0;i<difference;i++){
            pointerA = pointerA.next
        }
    }else{
        const difference = lengthB - lengthA
        for(let i=0;i<difference;i++){
            pointerB = pointerB.next
        }
    }
    //a loop can traverse two linked lists simultaneously because each pointer maintains its own position.
    while(pointerA !== null && pointerB !== null){
        // IMportant Note : two separate nodes can both contain 8 without being an intersection. 
        // The intersection occurs only when both pointers reference the exact same node object.
        if(pointerA === pointerB){
            return pointerA
        }
        pointerA = pointerA.next
        pointerB = pointerB.next
    }
    return null
}

// Since there are N be length of List A and M be length of list B
// Time complexity is O(N+M)
// Find intersection is O(min(N,M))
// Aling pointers is O(|N-M|)
// Space complexity is O(1)


// Another approach where if the pointerA or pointerB reaches null , then 
// we switch pointerA = headB or start of the second list or viceversa

function getIntersectionNode(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA === null ? headB : pointerA.next;

        pointerB = pointerB === null ? headA : pointerB.next;
    }

    return pointerA;
}

// Time complexity - O(N+M)
// Space is O(1)