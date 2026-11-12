function MinimumInaRotatedArray(nums){
    let n = nums.length
    let low = 0
    let high = n - 1
    let ans = Infinity
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(nums[low] <= nums[mid]){
            ans = Math.min(ans,nums[low])
            low = mid + 1
        }else{
            ans = Math.min(ans,nums[mid])
            high = mid - 1
        }
    }
    return ans
}

// If a half is sorted, its first element is the minimum of that half.