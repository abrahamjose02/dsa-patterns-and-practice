function findLowerBound(nums,target){
    let n = nums.length
    let low = 0
    let high = n - 1
    let ans = n
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(nums[mid] >= target){
            ans = mid
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return ans
 }

function findUpperBound(nums,target){
    let n = nums.length
    let low = 0
    let high = n - 1
    let ans = n
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(nums[mid] > target){
            ans = mid
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return ans
 }
var searchRange = function(nums, target) {
    if(nums.length === 0){
        return [-1,-1]
    }
    let firstOccurence = findLowerBound(nums,target)

    if (firstOccurence === nums.length || nums[firstOccurence] !== target) {
    return [-1, -1];
   }

    let upperBound = findUpperBound(nums,target)

    let lastOccurence = upperBound - 1

    return [firstOccurence,lastOccurence]
};

// WE need the condition comparing the firstOccurence and nums.length and also the nums[firstOCcurence] not equal to target
// Lower Bound does not guarantee that the target exists in the array.

// Lower Bound	First index where nums[i] >= target
// First Occurrence	First index where nums[i] === target
//Lower Bound becomes the first occurrence only when the target actually exists at that index.

// nums = [1, 2, 3, 3, 5]
// target = 3


// Lower Bound returns 2.
// - firstOccurence === nums.length → 2 === 5 → false
// - nums[firstOccurence] !== target → 3 !== 3 → false

// Both are false, so we continue and find the last occurrence.

// Case 2: Target doesn't exist, but Lower Bound is a valid index
// nums = [1, 2, 4, 6, 8]
// target = 3


// Lower Bound returns 2, because nums[2] = 4 is the first value >= 3.
// - firstOccurence === nums.length → false
// - nums[firstOccurence] !== target → 4 !== 3 → true
// We return [-1, -1] because the target doesn't exist.