function RemoveDuplicatesFromSortedArray(nums){
    const set = new Set()
   for(let i=0;i<nums.length;i++){
    set.add(nums[i])
   }
    let index = 0
    for(const values of set){
        nums[index] = values
        index++
    }
    return index
}

// The above solution has a time complexity of O(n)+O(k) , and space complexity of O(n)

// To optimize it using Two pointer approach.

function RemoveDuplicatesFromSortedArrayI(nums){

let n = nums.length;
    let left = 0
    for(let right = 0 ;right < n; right++){
        if(nums[left] !== nums[right]){
            nums[left+1] = nums[right]
            left++
        }
    }
    return left+1
}