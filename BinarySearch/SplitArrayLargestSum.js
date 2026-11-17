function calculateSubArray(nums,maxSum){
    let subArray = 1
    let sum = 0
    for(let num of nums){
        sum += num
        if(sum > maxSum){
            subArray++
            sum = num
        }
    }
    return subArray
}
var splitArray = function(nums, k) {
    let low = Math.max(...nums)
    let high = nums.reduce((sum,num)=> sum + num , 0)
    let ans = -1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let requiredSubArray = calculateSubArray(nums,mid)
        if(requiredSubArray <= k){
            ans = mid
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    return ans
};