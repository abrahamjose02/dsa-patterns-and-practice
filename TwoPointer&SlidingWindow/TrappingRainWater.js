function TrappingRainWater(height){
    let left = 0
    let right = height.length-1
    let leftMax = 0
    let rightMax = 0
    let area = 0
    while(left<right){
        if(height[left]<height[right]){
            if(height[left] >= leftMax){
                leftMax = height[left]
            }
            else{
                area += leftMax - height[left]
            }
            left++
        }
        else{
            if(height[right]>=rightMax){
                rightMax = height[right]
            }else{
                area += rightMax - height[right]
            }
            right--
        }
    }
    return area
}

let height = [0,1,0,2,1,0,1,3,2,1,2,1]

console.log(TrappingRainWater(height))