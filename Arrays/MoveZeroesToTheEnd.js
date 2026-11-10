// The below solution has O(n) space complexity 

function MoveZeroes(nums){
    let result = new Array(nums.length).fill(0)
    let n = nums.length
    let index = 0
    for(let i=0;i<n;i++){
        if(nums[i] !== 0){
            result[index] = nums[i]
            index++
        }
    }
    for(let i=0;i<result.length;i++){
        nums[i] = result[i]
    }
}

// But requires in place change without additional array in space complexity of O(1)

function MoveZeroesI(nums){
    let n = nums.length
    let left = 0
    for(let right = 0;right<n;right++){
        if(nums[right] !== 0){
            [nums[left],nums[right]] = [nums[right],nums[left]]
            left++
        }
    }
}