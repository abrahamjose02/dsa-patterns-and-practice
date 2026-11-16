function KthMissingPositive(arr,k){
    let low = 0
    let high = arr.length - 1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let missingCount = arr[mid] - (mid + 1)
        if(missingCount < k){
            low = mid + 1
        }
        else{
            high = mid - 1
        }
    }
    return low + k
}
// 1. Calculate missing numbers before index mid using arr[mid] - (mid + 1).
// 2. If missingCount < k, search right; otherwise, search left.
// 3. After binary search, low represents the number of present elements before the kth missing number.
// 4. Return low + k.