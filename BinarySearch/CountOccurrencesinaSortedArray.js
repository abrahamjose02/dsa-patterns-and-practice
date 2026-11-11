// Count Occurences = UpperBound - LowerBound
function findLowerBound(nums,target,n){
    let low = 0 
    let high = n-1
    let ans = n
    while(low<=high){
        let mid = Math.floor((low + high)/2)
        if(nums[mid] >= target){
            ans = mid
            high = mid -1
        }else{
            low = mid + 1
        }
    }
    return ans
}

function findUpperBound(nums,target,n){
     let low = 0 
    let high = n-1
    let ans = n
    while(low<=high){
        let mid = Math.floor((low + high)/2)
        if(nums[mid] > target){
            ans = mid
            high = mid -1
        }else{
            low = mid + 1
        }
    }
    return ans
}
function countOccurrences(nums, target) {
    let n = nums.length
    let lowerBound = findLowerBound(nums,target,n)

    let upperBound = findUpperBound(nums,target,n)

    let count = upperBound - lowerBound

    return count
}