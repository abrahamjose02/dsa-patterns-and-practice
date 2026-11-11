function SearchInsertPosition(nums,target){
    let n = nums.length
    let low = 0
    let high = n-1
    let targetIndex = n
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(nums[mid] >= target){
            targetIndex = mid
            high = mid -1
        }
        else{
            low = mid + 1
        }
    }
    return targetIndex
}