function SquareRootOfANumber(nums){
    let low = 1
    let high = nums
    let ans = 0
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(mid * mid === nums){
            return mid
        }
        if(mid * mid < nums){
            ans = mid
            low = mid + 1
        }
        else{
            high = mid - 1
        }
    }
    return ans
}

// Notes : 
// We can apply binary search because we're searching over an ordered range of possible answers, 
// and the condition mid * mid <= x is monotonic. 
// Once a candidate becomes invalid, all larger candidates are also invalid.
// Therefore, we can eliminate half the search space in each iteration and find the largest valid integer in logarithmic time.
