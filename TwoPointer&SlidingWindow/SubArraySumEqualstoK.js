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

//The above solution doesn't work for all the Solutions : 


// Optmized method :  Prefix sum + Hash map

function SubArraySumEqualstoK(nums,k){
    let prefixSum = 0
    let map = new Map()
    let count = 0
    map.set(0,1)
    for(let i=0;i<nums.length;i++){
        prefixSum += nums[i]
        let requiredSum = prefixSum - k
        if(map.has(requiredSum)){
            count += map.get(requiredSum)  
        }
        map.set(prefixSum,(map.get(prefixSum)||0)+1)
    }
    return count
}

//Notes : 

// 1. Maintain a running prefix sum and a HashMap storing previous prefix sum frequencies, initialized with 0 → 1.
// 2. At every index, calculate requiredSum = prefixSum - k.
// 3. Add the frequency of requiredSum to the total count, as each occurrence represents a distinct valid subarray.
// 4. Update the current prefix sum frequency after the lookup.

// Consider Prefix Sum + HashMap whenever you encounter problems involving:
// - Counting contiguous subarrays with a given sum.
// - Finding subarrays with sum zero.
// - Subarray sum problems involving negative numbers.
// - Finding the longest subarray satisfying a sum-related condition.