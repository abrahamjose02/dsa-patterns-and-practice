// Better solution

function maxConsecutiveBitIII(nums,k){
    let left = 0
    let maxLength = 0
    let zeroCount = 0
    for(let right = 0;right < nums.length;right++){
        if(nums[right] === 0){
            zeroCount++
        }
        
        while(zeroCount > k){
            if(nums[left] === 0){
                zeroCount--
            }
            left ++
        }
        maxLength = Math.max(maxLength,right-left+1)
    }
    return maxLength
}

let nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2

console.log(maxConsecutiveBitIII(nums,k))

// Optimal solution

function maxConsecutiveBitIII(nums,k){
    let left = 0
    let maxLength = 0
    let zeroCount = 0
    for(let right = 0;right < nums.length;right++){
        if(nums[right] === 0){
            zeroCount++
        }
       if(zeroCount > k){
        if(nums[left] === 0){
            zeroCount--
        }
        left++
       }
       if(zeroCount <= k){
        maxLength = Math.max(maxLength,right-left+1)
       }
    }
    return maxLength
}