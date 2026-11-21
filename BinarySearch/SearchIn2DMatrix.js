function SearchIn2DMatrix(matrix,target){
    let rows = matrix.length
    let cols = matrix[0].length
    let low = 0
    let high = rows * cols - 1
    while(low<=high){
        let mid = Math.floor((low + high)/2)
        let row = Math.floor(mid/cols)
        let col = mid % cols
        if(matrix[row][col] === target){
            return true
        }
        if(matrix[row][col] <= target){
            low = mid + 1
        }
        else{
            high = mid - 1
        }
    }
    return false
}

//Notes:
// 1. Initialize boundaries: rows = matrix.length, cols = matrix[0].length, low = 0, high = rows * cols - 1, because the matrix contains rows * cols elements, indexed from 0 to rows * cols - 1.
// 2. Calculate middle index: mid = Math.floor((low + high) / 2) treats the entire sorted 2D matrix as a virtual 1D sorted array without actually flattening it.
// 3. Convert 1D → 2D: row = Math.floor(mid / cols) gives the row by counting complete groups of cols elements; col = mid % cols gives the remaining position within that row.
// 4. Apply binary search: Compare matrix[row][col] with target; return true if equal, set low = mid + 1 if smaller, or high = mid - 1 if larger. Return false if not found. Time: (O(log(rows * cols))), Space: (O(1)).