function PeakElement(nums){
    let n = nums.length
    if(n === 0) return 0
    if(nums[0] > nums[1]) return 0
    if(nums[n-1] > nums[n-2]) return n-1
    let low = 1
    let high = n - 2
    while(low<=high){
        let mid = Math.floor((low + high)/2)
        if(nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]){
            return mid
        }
        if(nums[mid] < nums[mid+1]){
            low = mid + 1
        }
        else{
            high = mid - 1
        }
    }
    return -1
}

// The peak element is a element that is strictly greater than the its immediate neigbhor
//For boundary elements, we assume the values outside the array are infinity.
//This means the first or last element can also be a peak.