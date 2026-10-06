
function getPSE(heights){
    const n = heights.length
    let stack = []
    let pse = new Array(n)
    for(let i=0;i<n;i++){
        while(stack.length > 0 && heights[stack[stack.length-1]] >= heights[i]){
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
    let stack = []
    let nse = new Array(n)
    for(let i=n-1;i>=0;i--){
        while(stack.length > 0 && heights[stack[stack.length-1]] >= heights[i]){
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

function largestRectangleArea(heights){
    const n = heights.length
    const NSE = getNSE(heights)
    const PSE = getPSE(heights)
    let area = 0
    let maxArea = 0
    for(let i=0;i<n;i++){
        const width = NSE[i] - PSE[i] -1
        area = width * heights[i]
        maxArea = Math.max(maxArea,area)
    }
    return maxArea
}

function MaximalRectangle(matrix){
    const m = matrix.length
    const n = matrix[0].length
    const heights = new Array(n)
    const maxArea = 0
    for(let row=0;row<m;row++){
        let currentArea = 0
        for(let col=0;col<n;col++){
            if(matrix[row][col] === 1){
                heights[col] += 1
            }
            if(matrix[row][col] === 0){
                heights[col] = 0
            }
        }
        currentArea = largestRectangleArea(heights)
        maxArea = Math.max(currentArea,maxArea)
    }
    return maxArea
}