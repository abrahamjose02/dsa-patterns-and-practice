function palindromeLinkedList(head){
    if(head === null || head.next === null){
        return head
    }
    let values = []
    let current = head
    while(current !== null){
        values.push(current.values)
        current = current.next
    }
    let left = 0
    let right = values.length-1
    while(left < right){
        if(values[left] !== values[right]){
            return false
        }
        left++
        right--
    }
    return false
}

// The above solution has a Time complexity of O(n) and Space complexity of O(1). So we need to reduce the auxillary space
// used from O(n) to O(1)

// Fast and Slow pointer

 function findMiddleElement(head){
    let slow = head
    let fast = head.next
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
 }
 function reverseSecondHalf(head){
    let prev = null
    let current = head
    while(current !== null){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
 }
 function compareList(head,prev){
    let first = head
    let second = prev
    while(second !== null){
        if(first.val !== second.val){
            return false
        }
        first = first.next
        second = second.next
    }
    return true
 }
var isPalindrome = function(head) {
    if(head === null || head.next === null){
        return true
    }
    const middleElement = findMiddleElement(head)

    const secondHalfHead = reverseSecondHalf(middleElement.next)

    const result = compareList(head,secondHalfHead)

    middleElement.next = reverseSecondHalf(secondHalfHead)

    return result
};