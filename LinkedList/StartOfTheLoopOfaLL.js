//This solution is of O(n) Time complexity and O(n) space complexity as it uses set to store the values

function StartOftheCycleInLL(head){
    let visitedNodes = new Set()
    let current = head
    while(current !== null){
        if(visitedNodes.has(current)){
            return current
        }else{
            visitedNodes.add(current)
        }
        current = current.next
    }
    return null
}

// Now we have to implement the optimal solution with Floyd's algorithm with 
// Auxilliary space as O(1)

function StartOftheCycleInLLI(head){
    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            let pointerA = head
            let pointerB = slow
            while(pointerA !== pointerB){
                pointerA = pointerA.next
                pointerB = pointerB.next
            }
            return pointerA
        }
    }
    return null
}