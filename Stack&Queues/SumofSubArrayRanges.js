function SumOfSubArrayRanges(nums){
    let sum = 0
    let n = nums.length
    for(let i=0;i<n;i++){
       let largest = nums[i]
       let smallest = nums[i]
        for(let j=i+1;j<n;j++){
            largest = Math.max(largest,nums[j])
            smallest = Math.min(smallest,nums[j])
            sum += largest - smallest
        }
    }
    return sum
}

let num = [1,2,3]
console.log(SumOfSubArrayRanges(num))

//optimal solution

function SumOfSubArrayRanges1(nums){
    let n = nums.length
    let stack = []
    let minSum = 0
    let maxSum = 0

    let leftMin = new Array(n)
    let rightMin = new Array(n)
    //Previous Small Element
    for(let i=0;i<n;i++){
        while(stack.length>0 && nums[stack[stack.length-1]] >= nums[i]){
            stack.pop()
        }
        leftMin[i] = stack.length === 0 ? -1 : stack[stack.length-1]
        stack.push(i)
    }

    stack = []
    //Next Smaller Element
    for(let i=n-1;i>=0;i--){
        while(stack.length>0 && nums[stack[stack.length-1]] > nums[i]){
            stack.pop()
        }
        rightMin[i] = stack.length === 0 ? n : stack[stack.length - 1]
        stack.push(i)
    }
    //minContribution part
    for(let i=0;i<n;i++){
        let leftMinCount = i - leftMin[i]
        let rightMinCount = rightMin[i] - i

        let minContribution = nums[i]*leftMinCount*rightMinCount

        minSum += minContribution
    }

    stack = []
    let leftMax = new Array(n)
    let rightMax = new Array(n)

    //Previous Greater Element
    for(let i=0;i<n;i++){
        while(stack.length>0 && nums[stack[stack.length-1]] <= nums[i]){
            stack.pop()
        }
        leftMax[i] = stack.length === 0 ? -1 : stack[stack.length-1]

        stack.push(i)
    }

    stack=[]
    //Next Greater Element
    for(let i=n-1;i>=0;i--){
        while(stack.length >0 && nums[stack[stack.length-1]] < nums[i]){
            stack.pop()
        }
        rightMax[i] = stack.length === 0 ? n : stack[stack.length-1]
        stack.push(i)
    }

    for(let i=0;i<n;i++){
        let leftMaxCount = i - leftMax[i]
        let rightMaxCount = rightMax[i] - i

        let maxContribution = nums[i]*leftMaxCount*rightMaxCount

        maxSum += maxContribution
    }

    return maxSum - minSum
}

let nums = [1,2,3]
console.log(SumOfSubArrayRanges1(nums))