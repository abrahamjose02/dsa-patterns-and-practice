function JumpI(nums){
    let n = nums.length
    let maxReach = 0
    for(let i=0;i<n;i++){
        if(i > maxReach){
            return false
        }
        maxReach = Math.max(maxReach,i+nums[i])
        if(maxReach >= n-1){
            return true
        }
    }
    return false
}

// maxReach is not the maximum reach of the current index alone. 
// It is the farthest reachable index across all reachable positions we have examined so far.

// - i represents the current position.
// - nums[i] represents the maximum jump length.
// - i + nums[i] represents the farthest destination from the current position.
// - Math.max() preserves the previously reachable range.
// - Always check reachability before updating maxReach.
// - Use >= instead of === for the success condition.