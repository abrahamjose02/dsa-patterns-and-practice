// Next Smaller Element

function NextSmallerElement(nums){
    let n = nums.length
    let result = new Array(n).fill(-1)
    let stack = []
    for(let i=n-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1] >= nums[i]){
            stack.pop()
        }
        if(stack.length>0){
            result[i] = stack[stack.length-1]
            console.log(result)
        }
        stack.push(nums[i])
    }
    return result
}

let nums = [2,10,12,1,11]

console.log(NextSmallerElement(nums))