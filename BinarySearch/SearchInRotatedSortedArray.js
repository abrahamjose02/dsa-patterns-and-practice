function SearchInRotatedSortedArray(nums,target){
    let n = nums.length
    let low = 0
    let high = n - 1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(nums[mid] === target){
            return mid
        }
        if(nums[low] <= nums[mid]){ // When the left half is sorted apply the below condition
            if(nums[low] <= target && target < nums[mid]){
                high = mid -1
            }else{
                low = mid + 1
            }
        }else{
            if(nums[mid] < target && target <= nums[high]){ // When the right half is sorted apply the condition
                low = mid + 1
            }else[
                high = mid - 1
            ]
        }
    }
    return -1
}

// Note : 

//We don't always move right just because the left half is sorted. 
// // We first check whether the target lies within that sorted half.
// The correct reasoning
// For the target to lie inside the sorted left half, it must satisfy both boundaries:

// arr[low] < x < arr[mid]

// When the right half is sorted, we need:

// arr[mid] < x  < arr[high]



