function MaximumPoints(nums,k){
let n = nums.length
let leftSum = 0
let rightSum = 0
let maxSum = 0
for(let i = 0 ; i<k;i++){
    leftSum += nums[i]
}
maxSum = leftSum
let rightIndex = n-1
for(let i=k-1;i>=0;i--){
    leftSum -= nums[i]
    rightSum += nums[rightIndex]
    rightIndex -= 1

    maxSum = Math.max(maxSum,leftSum + rightSum)
}
return maxSum
}

cardPoints = [1,2,3,4,5,6,1], k = 3

console.log(MaximumPoints(cardPoints,k))