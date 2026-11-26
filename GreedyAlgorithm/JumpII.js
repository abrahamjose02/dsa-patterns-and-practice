function JumpII(nums){
    let n = nums.length
    let count = 0
    let currentEnd = 0
    let maxReach = 0
    for(let i=0;i<n-1;i++){
        maxReach = Math.max(maxReach,i+nums[i])
        if(i === currentEnd){
            count++
            currentEnd = maxReach
        }
    }
    return count
}

//Notes : 

// - Never increment the jump count simply because maxReach increases.
// - Explore the entire current range before committing to another jump.
// - Update maxReach before checking the current boundary.
// - Traverse only until n - 2 because no jump is required from the destination.
// - A single-element array automatically returns zero jumps.