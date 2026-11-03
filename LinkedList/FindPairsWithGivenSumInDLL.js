
// The above method is taking a time complexity of 	O(N²)

function FindAllThePairsWithGivenSumInDLL(head,target){
    let pointerA = head
    let result = []
    while(pointerA !== null){
        let complement = target - pointerA.val

        let pointerB = pointerA.next

        while(pointerB !== null){
            if(pointerB.val === complement){
                result.push([pointerA.val,pointerB.val])
            }
            pointerB = pointerB.next
        }
        pointerA = pointerA.next
    }
    return result
}

// The optimal solution with two pointer approach with left and right pointer
// The Approach will be having the space complexity of O(n) as well

function FindAllThePairsWithGivenSumInDLL(head, target) {
    if(head === null){
        return []
    }
    let result = [];

    let left = head;
    let right = head;

    while(right !== null && right.next !== null){
        right = right.next
    }
    // left !== right  prevents using the same nodes
    // right.next !== left detects when the pointers have crossed.
    while(left !== right && right.next !== left){
        let sum = left.val + right.val
        if(sum > target){
            right = right.prev
        }
        else if(sum < target){
            left = left.next
        }
        else if(sum === target){
            result.push([left.val,right.val])
            left = left.next
            right = right.prev
        }
    }
    return result;
}