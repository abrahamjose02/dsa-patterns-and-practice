//optimal solution 

function BinarySubarraysWithSum(nums,goal){
    return atMost(nums,goal) - atMost(nums,goal-1)
};

function atMost(nums,target){
    if(target < 0){
        return 0
    }
    let n = nums.length
    let left = 0
    let sum = 0
    let count = 0
    for(let right = 0;right < n;right++){
        sum += nums[right]
        while(sum > target){
            sum -= nums[left]
            left++
        }
        count += right - left + 1
    }
    return count
}
