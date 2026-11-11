 const arr = [2, 5, 8, 12, 16, 23, 38];
const target = 23;

function binarySearch(arr, target) {
    let n = arr.length
    let low = 0
    let high = n-1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(arr[mid] === target){
            return mid
        }
        else if(arr[mid] < target){
            low = mid +1
        }else{
            high = mid - 1
        }
    }
    return -1
}

// Recursive Method of Binary Search

function binarySearch(arr,target,low,high){
    if(low > high){
        return -1
    }
    let mid = Math.floor((low + high)/2)

    if(arr[mid] === target){
        return mid
    }
    else if(arr[mid] < target){
        return binarySearch(arr,target,mid+1,high)
    }
    else{
        return binarySearch(arr,target,low,mid-1)
    }
}

//In the recursive implementation, each recursive call creates a new stack frame. 
// Since the search space halves with each call, the maximum recursion depth is \(O(\log n)\).
// The Auxillary Space complexity is : O(log n)