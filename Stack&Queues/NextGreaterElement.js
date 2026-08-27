//Next Greater Element

function NextGreaterElement(nums){
    let result = new Array(nums.length).fill(-1)
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]>nums[i]){
                result[i] = nums[j]
                break
            }
        }
        
    }
    return result
}

let arr = [6,0,8,1,3]
console.log(NextGreaterElement(arr))

//Optimal solution

function NextGreaterElementI(nums){
    let n = nums.length
    let result = new Array(nums.length).fill(-1)
    let stack = []
    for(let i=n-1;i>=0;i--){
        while(stack.length > 0 && stack[stack.length-1] <=  nums[i]){
            stack.pop()
        }
        if(stack.length>0){
            result[i] = stack[stack.length-1]
        }
        stack.push(nums[i])
    }
    return result
}

console.log(NextGreaterElementI(arr))