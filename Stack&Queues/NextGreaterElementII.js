//Next Greater Element II

function NextGreaterElementII(nums){
    let n = nums.length
    let result = new Array(n).fill(-1)
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let index = (i+j) % n
            if(nums[index] > nums[i]){
                result[i] = nums[index]
                break;
            }
        }
    }
    return result
}

let nums = [2,10,12,1,11]
console.log(NextGreaterElementII(nums))


//Optimized Solution

function NextGreaterElementIIs(nums){
    let n = nums.length
    let result = new Array(n).fill(-1)
    let stack = []
    for(let i=2*n-1;i>=0;i--){
        let current = nums[i % n]
        while(stack.length > 0 && stack[stack.length-1]<=current){
            stack.pop()
        }
        if(i<n){
            if(stack.length > 0){
                result[i] = stack[stack.length-1]
            }
        }
        stack.push(current)
    }
    return result
}

console.log(NextGreaterElementIIs(nums))