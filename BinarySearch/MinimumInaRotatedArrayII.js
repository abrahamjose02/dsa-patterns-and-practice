function MinimumInaRotatedArrayII(nums){
    let n = nums.length
    let low = 0
    let high = n-1
    let ans = nums[0]
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(nums[low] === nums[mid] && nums[mid] === nums[high]){
            ans = Math.min(ans,nums[low]) // while checking for duplicates since we want to record the answer
            // we record the nums[low] which is equally equalent to nums[high] === nums[low]
            low++
            high--
            continue;
        }
        if(nums[low] <= nums[mid]){
            ans = Math.min(ans,nums[low])
            low = mid + 1
        }
        else{
            ans = Math.min(ans,nums[mid])
            high = mid - 1
        }
    }
    return ans
}