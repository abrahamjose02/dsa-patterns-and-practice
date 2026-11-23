function nextPermutation(nums){
    let n = nums.length
    let pivotIndex = -1
    for(let i=n-2;i>=0;i--){
        if(nums[i] < nums[i+1]){
            pivotIndex = i
            break;
        }
    }
    if(pivotIndex !== -1){
        for(let i = n -1 ;i>= pivotIndex+1;i--){
            if(nums[i] > nums[pivotIndex]){
                [nums[i],nums[pivotIndex]] = [nums[pivotIndex],nums[i]]
                break;
            }
        }
    }
    let left = pivotIndex+1 
    let right = n-1
    while(left < right){
        [nums[left],nums[right]] = [nums[right],nums[left]]
        left++
        right--
    }
}