function SearchIn2DMatrixII(matrix,target){
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
        if(matrix[row][col] < target){
            low = mid + 1
        }
        else{
            high = mid - 1
        }
    }
    return false
}