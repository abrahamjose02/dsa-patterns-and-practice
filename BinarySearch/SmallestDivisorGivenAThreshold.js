function calculateSum(nums,divisor){
    let totalSum = 0
    for(let num of nums){
        totalSum += Math.ceil((num/divisor))
    }
    return totalSum
}
function SmallestDivisorGivenAThreshold(nums,threshold){
    let low = 1 // since we are looking for the lowest or smallest divisor
    let high = Math.max(...nums)
    let ans = -1
    while(low<=high){
        let mid = Math.max((low + high)/2)
        let totalSum = calculateSum(nums,mid)
        if(totalSum <= threshold){
            ans = mid
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    return ans
}


//Notes : 

// 1. Goal: Find the smallest positive divisor such that sum(Math.ceil(num / divisor)) <= threshold.
// 2. Search space: low = 1, high = max(nums); increasing the divisor never increases the rounded sum.
// 3. If totalSum <= threshold: Divisor is feasible → save ans = mid and search left (high = mid - 1).
// 4. If totalSum > threshold: Divisor is too small → search right (low = mid + 1) because smaller divisors produce equal or larger sums.