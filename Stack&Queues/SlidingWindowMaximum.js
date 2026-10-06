function SlidingWindowMax(nums,k){
let result = []
let n = nums.length
for(let i=0;i<n-k;i++){
    let max = nums[i]
    for(let j=i;j<i+k-1;j++){
        max = Math.max(max,nums[j])
    }
    result.push(max)
}
return result
}

let nums = [1,3,-1,-3,5,3,6,7], k = 3
console.log(SlidingWindowMax(nums,k))

// optimal solution 

function SlidingWindowMaxI(nums,k){
       let result = []
    let n = nums.length
    let deque = []
    for(let i=0;i<n;i++){
        if(deque.length > 0 && deque[0] <= i-k){
            deque.shift()
        }
        while(deque.length > 0 && nums[deque[deque.length-1]]<= nums[i]){
            deque.pop()
        }
        deque.push(i)

        if(i>=k-1){
            result.push(nums[deque[0]])
        }
    }
    return result
}