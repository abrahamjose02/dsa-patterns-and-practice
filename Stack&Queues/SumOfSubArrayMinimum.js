function SumOfSubArrayMinimum(arr){
    let n=arr.length
    let left = new Array(n)
    let right = new Array(n)
    let stack = []
    for(let i=0;i<n;i++){
        while(stack.length > 0 && arr[stack[stack.length-1]] > arr[i]){
            stack.pop()
        }
        if(stack.length === 0){
            left[i] = -1
        }else{
            left[i] = stack[stack.length-1]
        }
        stack.push(i)
    }
    stack=[]
    for(let i=n-1;i>=0;i--){
        while(stack.length > 0 && arr[stack[stack.length-1]] >= arr[i]){
            stack.pop()
        }
        if(stack.length === 0){
            right[i] = n
        }else{
            right[i] = stack[stack.length-1]
        }
        stack.push(i)
    }
        let sum = 0
        let mod = 1000000007
    for(let i=0;i<n;i++){
        let leftCount =  i - left[i]
        let rightCount = right[i] - i
        let contribution = arr[i] * leftCount * rightCount
        sum = (sum + contribution) % mod
    }
    return sum
}

let arr = [3,1,2,4]

console.log(SumOfSubArrayMinimum(arr))