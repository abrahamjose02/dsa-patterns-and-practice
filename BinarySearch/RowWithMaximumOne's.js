// Brute force solution : O(n*m)
function RowWithMaximumOnes(mat){
    let maxCount = 0
    let rowIndex = 0
    let n = mat.length
    let m = mat[0].length
    for(let row = 0;row < n;row++){
        let count = 0
        for(let col = 0;col < m;col++){
            if(mat[row][col] === 1){
                count++
            }
        }
        if(count > maxCount){
            maxCount = count
            rowIndex = row
        }
    }
    return [rowIndex,maxCount]
}

//For the below solution the matrix is already sorted and it return -1 for
// the matrix that only contains 0 as values.
//Instead of traversing every element to count the 1s, we can use binary search to find the first occurrence of 1 in each row.
// First occurence of the 1 is at 1st index , then : Count = 4 - 1 = 3
//This works because every element after the first 1 must also be 1.

function LowerBound(row,target){
    let n = row.length
    let low = 0
    let high = n - 1
    let ans = n //Return the smallest index i where row[i] >= target. If no such index exists, return n.
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        if(row[mid] >= target){
            ans = mid 
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    return ans
}
function RowWithMaximumOnes(mat){
    
    let n = mat.length
    let m = mat[0].length
    let maxCount = 0
    let rowIndex = -1
    for(let row=0;row<n;row++){
        let firstIndex = LowerBound(mat[row],1)
        let countNoOfOnes = m - firstIndex // col length in a row - first occurence index
        if(countNoOfOnes > maxCount){
            maxCount = countNoOfOnes
            rowIndex = row
        }
    }
    return [maxCount,rowIndex]
}

