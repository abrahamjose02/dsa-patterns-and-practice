function HowManyTimestheArrayHasBeenRotated(nums){
    let n = nums.length
    let low = 0
    let high = n - 1
    let ans = Infinity
    let index = -1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(nums[low] <= nums[mid]){
            if(nums[low] < ans){
                ans = nums[low]
                index = low
            }
            low = mid + 1
        }
        else{
            if(nums[mid] < ans){
                ans = nums[mid]
                index = mid
            }
            high = mid - 1
        }
    }
    return index
}

// For a sorted array of distinct elements rotated to the right:

// Rotation Count = Index of Minimum Element

