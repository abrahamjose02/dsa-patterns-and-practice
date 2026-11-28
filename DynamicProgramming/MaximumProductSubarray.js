function maxProductSubArray(nums){
    let n = nums.length
    let currentMin = nums[0]
    let currentMax = nums[0]
    let maxProduct = nums[0]
    for(let i=1;i<n;i++){
        let newMax = currentMax * nums[i]
        let newMin = currentMin * nums[i]

        currentMin = Math.min(newMax,newMin,nums[i])
        currentMax = Math.max(newMax,newMin,nums[i])

        maxProduct = Math.max(maxProduct,currentMax)
    }
    return maxProduct
}



// Pattern: Modified Kadane's Algorithm

// Category: Dynamic Programming — Space-optimized DP

// Recognition: Maximum product of a contiguous subarray containing positive, negative and zero values.

// Key intuition: A negative number can convert the previous minimum product into the current maximum product. Therefore, maintain both extremes.

// Decision: Start a new subarray, extend the previous maximum, or extend the previous minimum.

// Complexity: O(n) time and O(1) space.