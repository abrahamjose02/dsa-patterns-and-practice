function TrappingRainWater(height){
    let n = height.length
    if(n===0){
        return 0
    }
    let suffixMax = new Array(n)
    suffixMax[n-1] = height[n-1]
    for(let i=n-2;i>=0;i--){
        suffixMax[i] = Math.max(suffixMax[i+1],height[i])
    }
    let prefixMax = 0
    let water = 0
    for(let i=0;i<n;i++){
        prefixMax = Math.max(prefixMax,height[i])

        waterAtCurrent = Math.min(prefixMax,suffixMax[i]) - height[i]

        water += waterAtCurrent
    }
    return water
}

let height = [0,1,0,2,1,0,1,3,2,1,2,1]

console.log(TrappingRainWater(height))