function LargestRectangleInHistogram(heights){
    let n = heights.length
    let maxArea = 0;
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            let minHeight = Infinity
            for(let k=i;k<n;k++){
                minHeight=Math.min(minHeight,heights[k])
            }
            let width = j-i-1
            let area = width * minHeight

            maxArea = Math.max(maxArea,area)
        }
    }
    return maxArea
}

console.log(LargestRectangleInHistogram([2, 1, 5, 6, 2, 3]))


//Monotonic Stack

//Using PSE + NSE using monotonic stacks

function getPSE(heights){
    const n = heights.length
    const pse = new Array(n)
    const stack = []

    for(let i=0;i<n;i++){
        while(stack.length > 0 && heights[stack.length-1] >= heights[i]){
            stack.pop()
        }
        if(stack.length === 0){
            pse[i] = -1
        }else{
            pse[i] = stack[stack.length-1]
        }
        stack.push(i)
    }
    return pse
}

function getNSE(heights){
    const n = heights.length
    const nse = new Array(n)
    const stack = []

    for(let i=n-1;i>=0;i--){
        while(stack.length > 0 && heights[stack.length-1] >= heights[i]){
            stack.pop()
        }
        if(stack.length === 0){
            nse[i] = n
        }else{
            nse[i] = stack[stack.length-1]
        }
        stack.push(i)
    }
    return nse
}

function LargestRectangleInHistogramI(heights){
    const n = heights.length

    const pse = getPSE(heights)
    const nse = getNSE(heights)

    let maxArea = 0

    for(let i=0;i<n;i++){
        const width = nse[i] - pse[i] - 1
        const area = width * heights[i]
        maxArea = Math.max(maxArea,area)
    }
    return maxArea
}