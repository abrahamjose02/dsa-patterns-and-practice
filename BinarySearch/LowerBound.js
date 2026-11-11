const arr = [1, 3, 3, 3, 6, 8, 10];
const x = 3;

function lowerBound(arr, x) {
    let n = arr.length
    let low = 0
    let high = n-1
    let ans = n
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(arr[mid] >= x){
            ans = mid
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return ans
}

// - Time: (O(log n)) — The search space is halved in every iteration.
// - Auxiliary space: (O(1)) — Only a fixed number of variables are used.

// Without the ans variable
function lowerBoundII(arr, x) {
    let n = arr.length
    let low = 0
    let high = n-1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(arr[mid] >= x){
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return low
}