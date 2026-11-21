function MatrixMedian(matrix){
    let n = matrix.length;
    let m = matrix[0].length;

    let arr = [];
    for(let row = 0;row<n;row++){
        for(let col = 0;col<m;col++){
            arr.push(matrix[row][col])
        }
    }
    arr.sort((a,b)=>a-b)
    let mid = Math.floor(arr.length/2)
    return arr[mid]
}

//Optimized Answer

function upperBound(arr,target){
    let n = arr.length
    let low = 0
    let high = arr.length - 1
    let ans = n
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(arr[mid] > target){
            ans = mid
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }
    return ans
}
function MatrixMedianI(matrix){
    let n = matrix.length;
    let m = matrix[0].length;
    let low = Infinity;
    let high = -Infinity;

    for (let row = 0; row < n; row++) {
        low = Math.min(low, matrix[row][0]);
        high = Math.max(high, matrix[row][m - 1]);
    }
    let required = Math.floor((n*m)/2)
    let ans = -1
    while(low<=high){
        let mid = Math.floor((low + high)/2)
        let count = 0
        for(let row = 0 ;row < n;row++){
            count += upperBound(matrix[row],mid)
        }
        if(count <= required){
            low = mid +1
        }
        else{
            ans = mid 
            high = mid - 1
        }
    }
    return ans
}