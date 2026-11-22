var sortColors = function(nums) {
    let count0 = 0
    let count1 = 0
    let count2 = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 0){
            count0++
        }
        else if(nums[i] === 1){
            count1++
        }
        else{
            count2++
        }
    }
    for(let i=0;i<nums.length;i++){
        if(count0 !== 0){
            nums[i] = 0
            count0--
        }
        else if(count1 !== 0){
            nums[i] = 1
            count1--
        }
        else{
            nums[i] = 2
        }
    }
}; // Time complexity is : O(n) and the Space complexity is O(1) - 2 Pass

// Single Pass solution using Dutch National Flag Algorithm , single pass using three pointers
//Our goal is to maintain three regions:
// - Before low: all 0s.
// - Between low and mid - 1: all 1s.
// - After high: all 2s.
function sortColors(nums){
    let n = nums.length
    let low = 0
    let mid = 0
    let high = n - 1;
    while(mid <= high){ //The unprocessed region is from mid to high, inclusive.Processes every unclassified element, including when mid === high.
        if(nums[mid] === 0){
            [nums[low],nums[mid]] = [nums[mid],nums[low]]
            low++
            mid++
        }
        else if(nums[mid] === 1){
            mid++
        }
        else{
            [nums[mid],nums[high]] = [nums[high],nums[mid]]
            high--
        }
    }
}

// 1. Initialize three pointers: low = 0, mid = 0, and high = n - 1.
// 2. If nums[mid] === 0, swap with nums[low] and increment both low and mid.
// 3. If nums[mid] === 1, increment mid because the element is already in its correct region.
// 4. If nums[mid] === 2, swap with nums[high] and decrement high without incrementing mid, since the swapped element must be checked.

// Interview TakeAway : 
// mid is the pointer that examines unprocessed elements, while high marks their last possible position. 
// Therefore, the loop must continue until mid > high.