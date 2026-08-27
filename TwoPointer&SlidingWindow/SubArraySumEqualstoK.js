//SubArraySumEqualstoK

//sliding window method
function SubArraySumEqualstoK(nums,k){
    let left = 0
    let sum =0
    let count = 0
    for(let right =0;right<nums.length;right++){
        sum += nums[right]
        while(sum > k){
            sum -= nums[left]
            left++
        }
        if(sum === k){
            count++
        }
    }
    return count
}

nums = [1,1,1], k = 2

console.log(SubArraySumEqualstoK(nums,k))