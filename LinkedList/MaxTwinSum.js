 
 function MaxTwinSum(head){
    if (head === null || head.next === null) {
        return true;
    }

    let values = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    let left = 0
    let right = values.length-1
    let twinSum = 0
    let maxSum = 0
    while(left < right){
        twinSum = values[left] + values[right]
        maxSum = Math.max(maxSum,twinSum)
        left++
        right--
    }
    return maxSum
 }

 // The above solution is of O(n) complexity and auxillary space of O(n)
 // The below solution is optimistic to have a auxillary space of O(1)
 
 
 function findmiddleElement(head){
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
 function maxTwimSumComparison(head,prev){
    let first = head
    let second = prev
    let sum = 0
    let maxSum = 0
    while(second !== null){
        sum = first.val + second.val
        maxSum = Math.max(maxSum,sum)
    }
    return maxSum
 }
var pairSum = function(head) {
    if (head === null || head.next === null) {
        return true;
    }

    let middleElement = findmiddleElement(head)

    let SecondHalfHead = reverseSecondHalf(middleElement.next)

    let maxTwinSum = maxTwimSumComparison(head,SecondHalfHead)
    
    middleElement.next = reverseSecondHalf(SecondHalfHead)

    return maxTwinSum
};