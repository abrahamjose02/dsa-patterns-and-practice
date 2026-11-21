//Brute Force Solution for the Peak Element
function PeakElementII(mat){
    let n = mat.length;
    let m = mat[0].length;
    for(let row = 0;row<n;row++){
        for(let col=0;col<m;col++){
            let up = row > 0 ? mat[row-1][col] : -1
            let down = row < n - 1 ? mat[row+1][col]:-1
            let left = col > 0 ? mat[row][col - 1] : -1
            let right = col < m-1 ? mat[row][col+1] : -1
            if (
            mat[row][col] > up &&
            mat[row][col] > down &&
            mat[row][col] > left &&
            mat[row][col] > right
        ) {
            return [row, col];
        }
        }
    }
    return [-1,-1]
}

//Optimized Solution

function PeakElementsII(mat){
    let n = mat.length
    let m = mat[0].length
    let low = 0
    let high = m - 1
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let maxRow = 0
        for(let row = 1;row<n;row++){
            if(mat[row][mid] > mat[maxRow][mid]){
                maxRow = row
            }
        }
        let current = mat[maxRow][mid]
        let left = mid > 0 ? mat[maxRow][mid-1] : -1
        let right = mid < m - 1 ? mat[maxRow][mid +1]:-1
        if(current > left && current > right){
            return [maxRow,mid]
        }
        else if(left > current){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
}

//Note : 

// 1. Binary search on columns: Initialize low = 0, high = m - 1, and calculate mid = Math.floor((low + high) / 2); here mid directly represents a column index, not a flattened 1D index.
// 2. Find column maximum: Traverse all rows in column mid to find maxRow; this guarantees the selected element is greater than its vertical neighbors under the problem's constraints.
// 3. Check horizontal neighbors: Compare current = mat[maxRow][mid] against left and right, treating out-of-bounds neighbors as -1; return [maxRow, mid] if current exceeds both.
// 4. Reduce search space: If left > current, set high = mid - 1; otherwise, set low = mid + 1. Time: (O(nlog m)), Space: (O(1)).